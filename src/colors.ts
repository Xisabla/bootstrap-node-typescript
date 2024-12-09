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
    blue: "\x1b[34m",
    cyan: "\x1b[36m",
    gray: "\x1b[90m",
    green: "\x1b[32m",
    magenta: "\x1b[35m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",

    bgRedWhite: "\x1b[41m\x1b[37m",

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
 * @param message Message to colorize
 * @returns The colorized message
 *
 * @example
 * ```typescript
 * import { colorize } from './colors';
 *
 * console.log(colorize('red', 'This is red text'));
 * ```
 */
export function colorize(color: Color, message: string): string {
    return `${colors[color]}${message}${colors.reset}`;
}
