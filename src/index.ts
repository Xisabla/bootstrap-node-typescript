import http from "http";
import Logger from "./logger";
import { requestHandler } from "./app";

const log = new Logger("Main");

// ============================================================================
// Configuration
// ============================================================================

const PORT = 3000;

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
