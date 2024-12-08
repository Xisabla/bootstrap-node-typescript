/**
 * Main entry point for the server.
 *
 * Create a simple HTTP server that listens on port 3000 and responds with "Hello, World!" to all requests.
 */

import http from 'http';
import Logger from './logger';

const log = new Logger('Server');

// ============================================================================
// Configuration
// ============================================================================

const PORT = 3000;

// ============================================================================
// Request handler
// ============================================================================

const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse): void => {
    log.log(`Received request: ${req.method} ${req.url}`);

    if (req.method === 'GET' && req.url === '/') {
        log.success('Request successful');

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    } else {
        log.error(`Not Found: ${req.method} ${req.url}`);

        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
};

// ============================================================================
// Main
// ============================================================================

(() => {
    const server = http.createServer(requestHandler);

    server.listen(PORT, () => {
        log.verbose(`Server started at ${new Date().toISOString()}`);
        log.info(`Server is listening on port ${PORT}`);
        log.info(`Visit http://localhost:${PORT}/ to see the server in action`);
    });
})();
