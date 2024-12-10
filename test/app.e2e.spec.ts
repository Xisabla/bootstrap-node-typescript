import request from "supertest";
import { createServer, Server } from "http";
import { requestHandler } from "../src/app";

describe("HTTP Server Request Handler", () => {
    let server: Server;

    beforeAll(() => {
        server = createServer(requestHandler);
    });

    afterAll(() => {
        server.close();
    });

    it('should respond with "Hello, World!" for GET /', async () => {
        return request(server).get("/").expect(200).expect("Hello, World!");
    });

    it("should respond with 404 for unknown routes", async () => {
        return request(server).get("/unknown").expect(404).expect("Not Found");
    });

    it("should respond with 404 for non-GET methods", async () => {
        return request(server).post("/").expect(404).expect("Not Found");
    });
});
