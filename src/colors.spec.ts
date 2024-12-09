import c, { colors, colorize, Color } from "./colors";

describe("colors", () => {
    it("should have the correct color codes", () => {
        expect(colors.black).toBeDefined();
        expect(colors.blue).toBeDefined();
        expect(colors.cyan).toBeDefined();
        expect(colors.gray).toBeDefined();
        expect(colors.green).toBeDefined();
        expect(colors.magenta).toBeDefined();
        expect(colors.red).toBeDefined();
        expect(colors.white).toBeDefined();
        expect(colors.yellow).toBeDefined();

        expect(colors.bgBlack).toBeDefined();
        expect(colors.bgBlue).toBeDefined();
        expect(colors.bgCyan).toBeDefined();
        expect(colors.bgGreen).toBeDefined();
        expect(colors.bgMagenta).toBeDefined();
        expect(colors.bgRed).toBeDefined();
        expect(colors.bgWhite).toBeDefined();
        expect(colors.bgYellow).toBeDefined();

        expect(colors.bright).toBeDefined();
        expect(colors.dim).toBeDefined();
        expect(colors.italic).toBeDefined();
        expect(colors.underline).toBeDefined();
        expect(colors.blink).toBeDefined();
        expect(colors.reverse).toBeDefined();

        expect(colors.reset).toBeDefined();
    });
});

describe("colorize", () => {
    it("should colorize a message with the specified color", () => {
        const message = "Hello, World!";
        const color: Color = "red";

        const expected = `\x1b[31m${message}\x1b[0m`;

        expect(colorize(color, message)).toBe(expected);
    });

    it("should reset the color after the message", () => {
        const message = "Hello, World!";
        const color: Color = "green";

        const result = colorize(color, message);

        expect(result.endsWith(colors.reset)).toBe(true);
    });

    it("should handle different colors correctly", () => {
        const message = "Test message";

        Object.keys(colors).forEach((color) => {
            if (color !== "reset") {
                const result = colorize(color as Color, message);

                expect(result).toBe(`${colors[color as Color]}${message}\x1b[0m`);
            }
        });
    });

    it("should handle multiple messages correctly", () => {
        const messages = ["Hello", "World"];
        const color: Color = "blue";

        const expected = `\x1b[34mHello World\x1b[0m`;

        expect(colorize(color, ...messages)).toBe(expected);
    });

    it("Should provide helper methods for each color as default export", () => {
        Object.keys(colors).forEach((color) => {
            if (color !== "reset") {
                const result = c[color as Color]("Hello, World!");

                expect(result).toBe(`${colors[color as Color]}Hello, World!\x1b[0m`);
            }
        });
    });
});
