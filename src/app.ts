import { IncomingMessage, ServerResponse } from "http";
import Logger from "./logger";

const log = new Logger("Server");

// ============================================================================
// Request Handler
// ============================================================================

/**
 * Request handler for the HTTP server.
 *
 * @param req Request object to handle
 * @param res Response object to write to
 */
export const requestHandler = (req: IncomingMessage, res: ServerResponse): void => {
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
