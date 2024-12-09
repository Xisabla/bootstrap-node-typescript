/**
 * Module for colorizing console output.
 *
 * Provides colors for console output and an utility function to colorize messages.
 */

/**
 * Colors for console output.
 *
 * @example
 * ```typescript
 * import { colors } from './colors';
 *
 * console.log(`${colors.red}This is red text${colors.reset}`);
 * ```
 */
export const colors = {
    black: "\x1b[30m",
    blue: "\x1b[34m",
    cyan: "\x1b[36m",
    gray: "\x1b[90m",
    green: "\x1b[32m",
    magenta: "\x1b[35m",
    red: "\x1b[31m",
    white: "\x1b[37m",
    yellow: "\x1b[33m",

    bgBlack: "\x1b[40m",
    bgBlue: "\x1b[44m",
    bgCyan: "\x1b[46m",
    bgGreen: "\x1b[42m",
    bgMagenta: "\x1b[45m",
    bgRed: "\x1b[41m",
    bgWhite: "\x1b[47m",
    bgYellow: "\x1b[43m",

    bright: "\x1b[1m",
    dim: "\x1b[2m",
    italic: "\x1b[3m",
    underline: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",

    reset: "\x1b[0m",
};

/**
 * Color names
 */
export type Color = keyof typeof colors;

/**
 * Colorize a message
 *
 * @param color Color to use
 * @param messages Messages to colorize
 * @returns The colorized message
 *
 * @example
 * ```typescript
 * import { colorize } from './colors';
 *
 * console.log(colorize('red', 'This is red text'));
 * console.log(colorize(['red', 'bgWhite'], 'This is red text on white background'));
 * console.log(colorize('red', 'This is red text', 'and this is also red'));
 * ```
 */
export function colorize(color: Color | Color[], ...messages: string[]): string {
    if (Array.isArray(color)) {
        return color.reduce((msg, c) => colorize(c, msg), messages.join(" "));
    }

    const message = messages.join(" ");

    return `${colors[color]}${message}${colors.reset}`;
}

/**
 * Color methods
 *
 * Object with an helper method for each color
 */
/**
 * An object containing methods to colorize text messages.
 * Each method takes a variable number of string arguments and returns a single colorized string.
 *
 * Available methods:
 * - `black`: Colors the text black.
 * - `blue`: Colors the text blue.
 * - `cyan`: Colors the text cyan.
 * - `gray`: Colors the text gray.
 * - `green`: Colors the text green.
 * - `magenta`: Colors the text magenta.
 * - `red`: Colors the text red.
 * - `white`: Colors the text white.
 * - `yellow`: Colors the text yellow.
 *
 * Background color methods:
 * - `bgBlack`: Colors the background black.
 * - `bgBlue`: Colors the background blue.
 * - `bgCyan`: Colors the background cyan.
 * - `bgGreen`: Colors the background green.
 * - `bgMagenta`: Colors the background magenta.
 * - `bgRed`: Colors the background red.
 * - `bgWhite`: Colors the background white.
 * - `bgYellow`: Colors the background yellow.
 *
 * Text style methods:
 * - `bright`: Makes the text bright.
 * - `dim`: Makes the text dim.
 * - `italic`: Makes the text italic.
 * - `underline`: Underlines the text.
 * - `blink`: Makes the text blink.
 * - `reverse`: Reverses the text color and background.
 * - `reset`: Resets the text style.
 *
 * @type {Object.<string, function(...string): string>}
 */
const COLOR_METHODS: Record<Color, (...messages: string[]) => string> = {
    black: (...messages) => colorize("black", messages.join(" ")),
    blue: (...messages) => colorize("blue", messages.join(" ")),
    cyan: (...messages) => colorize("cyan", messages.join(" ")),
    gray: (...messages) => colorize("gray", messages.join(" ")),
    green: (...messages) => colorize("green", messages.join(" ")),
    magenta: (...messages) => colorize("magenta", messages.join(" ")),
    red: (...messages) => colorize("red", messages.join(" ")),
    white: (...messages) => colorize("white", messages.join(" ")),
    yellow: (...messages) => colorize("yellow", messages.join(" ")),

    bgBlack: (...messages) => colorize("bgBlack", messages.join(" ")),
    bgBlue: (...messages) => colorize("bgBlue", messages.join(" ")),
    bgCyan: (...messages) => colorize("bgCyan", messages.join(" ")),
    bgGreen: (...messages) => colorize("bgGreen", messages.join(" ")),
    bgMagenta: (...messages) => colorize("bgMagenta", messages.join(" ")),
    bgRed: (...messages) => colorize("bgRed", messages.join(" ")),
    bgWhite: (...messages) => colorize("bgWhite", messages.join(" ")),
    bgYellow: (...messages) => colorize("bgYellow", messages.join(" ")),

    bright: (...messages) => colorize("bright", messages.join(" ")),
    dim: (...messages) => colorize("dim", messages.join(" ")),
    italic: (...messages) => colorize("italic", messages.join(" ")),
    underline: (...messages) => colorize("underline", messages.join(" ")),
    blink: (...messages) => colorize("blink", messages.join(" ")),
    reverse: (...messages) => colorize("reverse", messages.join(" ")),
    reset: (...messages) => colorize("reset", messages.join(" ")),
};

export default COLOR_METHODS;
