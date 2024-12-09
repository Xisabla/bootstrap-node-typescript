import Logger from "./logger";

describe("Logger", () => {
    let logger: Logger;

    let consoleLogSpy: jest.SpyInstance;
    let consoleWarnSpy: jest.SpyInstance;
    let consoleErrorSpy: jest.SpyInstance;

    beforeEach(() => {
        logger = new Logger("TestLogger");

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

        jest.useFakeTimers().setSystemTime(new Date(0).getTime());
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("should log a message with the LOG level", () => {
        const message = "This is a log message";

        logger.log(message);

        expect(consoleLogSpy).toHaveBeenCalledWith(
            expect.stringContaining("\x1b[32m[\x1b[0m\x1b[36mLOG\x1b[0m\x1b[32m]\x1b[0m"),
        );
        expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });

    it("should log a message with the VERBOSE level", () => {
        const message = "This is a verbose message";

        logger.verbose(message);

        expect(consoleLogSpy).toHaveBeenCalledWith(
            expect.stringContaining("\x1b[32m[\x1b[0m\x1b[90mVERBOSE\x1b[0m\x1b[32m]\x1b[0m"),
        );
        expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining("\x1b[90mThis is a verbose message\x1b[0m"));
    });

    it("should log a message with the INFO level", () => {
        const message = "This is an info message";

        logger.info(message);

        expect(consoleLogSpy).toHaveBeenCalledWith(
            expect.stringContaining("\x1b[32m[\x1b[0m\x1b[34mINFO\x1b[0m\x1b[32m]\x1b[0m"),
        );
        expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining("\x1b[34mThis is an info message\x1b[0m"));
    });

    it("should log a message with the WARN level", () => {
        const message = "This is a warn message";

        logger.warn(message);

        expect(consoleWarnSpy).toHaveBeenCalledWith(
            expect.stringContaining("\x1b[32m[\x1b[0m\x1b[33mWARN\x1b[0m\x1b[32m]\x1b[0m"),
        );
        expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining("\x1b[33mThis is a warn message\x1b[0m"));
    });

    it("should log a message with the ERROR level", () => {
        const message = "This is an error message";

        logger.error(message);

        expect(consoleErrorSpy).toHaveBeenCalledWith(
            expect.stringContaining("\x1b[32m[\x1b[0m\x1b[31mERROR\x1b[0m\x1b[32m]\x1b[0m"),
        );
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            expect.stringContaining("\x1b[31mThis is an error message\x1b[0m"),
        );
    });

    it("should log a message with the CRITICAL level", () => {
        const message = "This is a critical message";

        logger.critical(message);

        expect(consoleErrorSpy).toHaveBeenCalledWith(
            expect.stringContaining(
                "\x1b[32m[\x1b[0m\x1b[1m\x1b[37m\x1b[41mCRITICAL\x1b[0m\x1b[0m\x1b[0m\x1b[32m]\x1b[0m",
            ),
        );
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            expect.stringContaining(`\x1b[37m\x1b[41mThis is a critical message\x1b[0m\x1b[0m`),
        );
    });

    it("should contain the current date and time in the log message", () => {
        const message = "This is a log message";

        logger.log(message);

        expect(consoleLogSpy).toHaveBeenCalledWith(
            expect.stringContaining("\x1b[32m[\x1b[0m\x1b[35m1970-01-01T00:00:00.000Z\x1b[0m\x1b[32m]\x1b[0m"),
        );
    });

    it("should contain the logger name in the log message", () => {
        const message = "This is a log message";

        logger.log(message);

        expect(consoleLogSpy).toHaveBeenCalledWith(
            expect.stringContaining("\x1b[32m[\x1b[0m\x1b[36mTestLogger\x1b[0m\x1b[32m]\x1b[0m"),
        );
    });
});
