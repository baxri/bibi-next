const next = require('next');
const express = require('express');
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const routes = require('./routes/index');

nextApp.prepare().then(() => {

    const app = express();

    app.use('/api', routes);


    app.get('*', (req, res) => {

        const parsedUrl = parse(req.url, true)
        const { pathname } = parsedUrl

        // handle GET request to /service-worker.js
        if (pathname === '/service-worker.js') {
            const filePath = join(__dirname, '.next', pathname)

            return app.serveStatic(req, res, filePath)
        } else {
            // return handle(req, res);
            return handle(req, res, parsedUrl)
        }

    });

    app.listen({ port: port }, () =>
        console.log(`🚀 Server ready at http://localhost:${port}`)
    );
});
