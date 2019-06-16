const next = require('next');
const express = require('express');
const { join } = require('path')

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const routes = require('./routes/index');

nextApp.prepare().then(() => {

    const app = express();

    app.use('/api', routes);

    app.use('/service-worker.js', express.static(join(__dirname, '.next', '/service-worker.js')))
    app.use('/sw-push-listener.js', express.static(join(__dirname, '.next', '/sw-push-listener.js')))

    app.get('*', (req, res) => {
        return handle(req, res);
    });

    app.listen({ port: port }, () =>
        console.log(`🚀 Server ready at http://localhost:${port}`)
    );
    
});
