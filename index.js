'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.note = undefined;var _app = require('./app');var _app2 = _interopRequireDefault(_app);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function App(req, res) {
    if (!req.url) {
        req.url = '/';
        req.path = '/';
    }
    return (0, _app2.default)(req, res);
}

const note = App;exports.
note = note;