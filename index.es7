import app from './app';

function App(req, res) {
    if (!req.url) {
        req.url = '/';
        req.path = '/';
    }
    return app(req, res);
}

const note = App;
export { note }