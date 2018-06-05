'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _cors = require('cors');var _cors2 = _interopRequireDefault(_cors);
var _index = require('./routes/index');var _index2 = _interopRequireDefault(_index);
var _methodOverride = require('method-override');var _methodOverride2 = _interopRequireDefault(_methodOverride);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


const app = (0, _express2.default)();
app.use((0, _cors2.default)({ origin: true }));
app.use(_express2.default.json());
app.use('/api', _index2.default);
app.use((0, _methodOverride2.default)());
app.use((err, req, res, next) => {
    res.status(400).json({
        error: err.message });
});exports.default =

app;