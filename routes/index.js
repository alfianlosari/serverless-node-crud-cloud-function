'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _firebaseAdmin = require('firebase-admin');var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_firebaseAdmin2.default.initializeApp({
    credential: _firebaseAdmin2.default.credential.applicationDefault() });

const db = _firebaseAdmin2.default.firestore();

const router = (0, _express.Router)();
router.get('/', (() => {var _ref = (0, _asyncToGenerator3.default)(function* (req, res, next) {
        try {
            const noteSnapshot = yield db.collection('notes').get();
            const notes = [];
            noteSnapshot.forEach(function (doc) {
                notes.push({
                    id: doc.id,
                    data: doc.data() });

            });
            res.json(notes);
        } catch (e) {
            next(e);
        }
    });return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};})());

router.get('/:id', (() => {var _ref2 = (0, _asyncToGenerator3.default)(function* (req, res, next) {
        try {
            const id = req.params.id;
            if (!id) throw new Error('id is blank');
            const note = yield db.collection('notes').doc(id).get();
            if (!note.exists) {
                throw new Error('note does not exists');
            }
            res.json({
                id: note.id,
                data: note.data() });

        } catch (e) {
            next(e);
        }
    });return function (_x4, _x5, _x6) {return _ref2.apply(this, arguments);};})());

router.post('/', (() => {var _ref3 = (0, _asyncToGenerator3.default)(function* (req, res, next) {
        try {
            const text = req.body.text;
            if (!text) throw new Error('Text is blank');
            const data = { text };
            const ref = yield db.collection('notes').add(data);
            res.json({
                id: ref.id,
                data });

        } catch (e) {
            next(e);
        }
    });return function (_x7, _x8, _x9) {return _ref3.apply(this, arguments);};})());

router.put('/:id', (() => {var _ref4 = (0, _asyncToGenerator3.default)(function* (req, res, next) {
        try {
            const id = req.params.id;
            const text = req.body.text;
            if (!id) throw new Error('id is blank');
            if (!text) throw new Error('Text is blank');
            const data = { text };
            const ref = yield db.collection('notes').doc(id).set(data, { merge: true });
            res.json({
                id,
                data });

        } catch (e) {
            next(e);
        }
    });return function (_x10, _x11, _x12) {return _ref4.apply(this, arguments);};})());

router.delete('/:id', (() => {var _ref5 = (0, _asyncToGenerator3.default)(function* (req, res, next) {
        try {
            const id = req.params.id;
            if (!id) throw new Error('id is blank');
            yield db.collection('notes').doc(id).delete();
            res.json({
                id });

        } catch (e) {
            next(e);
        }
    });return function (_x13, _x14, _x15) {return _ref5.apply(this, arguments);};})());exports.default =

router;