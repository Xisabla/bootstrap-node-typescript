/**
 * Main entry point for the server.
 *
 * Create a simple HTTP server that listens on port 3000 and responds with "Hello, World!" to all requests.
 */

import http from "http";
import Logger from "./logger";

const log = new Logger("Server");

// ============================================================================
// Configuration
// ============================================================================

const PORT = 3000;

// ============================================================================
// Request handler
// ============================================================================

const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse): void => {
    const method = req.method ?? "UNKNOWN";
    const url = req.url ?? "UNKNOWN";

    log.log(`Received request: ${method} ${url}`);

    if (method === "GET" && url === "/") {
        log.success("Request successful");

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, World!");
    } else {
        log.error(`Not Found: ${method} ${url}`);

        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
};

// ============================================================================
// Main
// ============================================================================

(() => {
    const server = http.createServer(requestHandler);

    server.listen(PORT, () => {
        log.verbose(`Server started at ${new Date().toISOString()}`);
        log.info(`Server is listening on port ${PORT.toString()}`);
        log.info(`Visit http://localhost:${PORT.toString()}/ to see the server in action`);
    });
})();

// Stop the server when the process is terminated

function stopServer(): void {
    log.warn("Server is shutting down...");

    process.exit(0);
}

process.on("SIGINT", stopServer);
process.on("SIGTERM", stopServer);
process.on("SIGQUIT", stopServer);
