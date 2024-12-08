/**
 * Module for logging messages with different log levels
 *
 * Provides a Logger class with methods for logging messages with different log levels.
 */

import { Color, colorize } from "./colors";

/**
 * Logger class
 *
 * Provides logging methods for different log levels.
 * Logs messages with a timestamp and the name of the logger.
 */
class Logger {
    /**
     * Name of the logger
     */
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // ========================================================================
    // Private methods
    // ========================================================================

    /**
     * Format a log message with a timestamp, logger name, log level, and message
     *
     * @param level - Log level
     * @param message - Log message
     * @param color - Optional color for the message
     * @returns Formatted log message
     */
    private formatMessage(level: string, message: string, color?: Color): string {
        const timestamp = new Date().toISOString();

        if(color) {
            message = colorize(color, message);
        }

        const prefixTimestamp = `[${timestamp}]`;
        const prefixName = `[${this._name}]`;
        const prefixLevel = `[${level}]`;
        const prefix = `${prefixTimestamp} ${prefixName} ${prefixLevel}`;

        return `${prefix} ${message}`;
    }

    // ========================================================================
    // Public logging methods
    // ========================================================================

    /**
     * Log a message with the LOG level
     *
     * @param message - Log message
     */
    public log(message: string): void {
        console.log(this.formatMessage('LOG', message));
    }

    /**
     * Log a message with the VERBOSE level
     *
     * @param message - Log message
     */
    public verbose(message: string): void {
        console.log(this.formatMessage('VERBOSE', message, 'gray'));
    }

    /**
     * Log a message with the DEBUG level
     *
     * @param message - Log message
     */
    public info(message: string): void {
        console.log(this.formatMessage('INFO', message, 'blue'));
    }

    /**
     * Log a message with the WARN level
     *
     * @param message - Log message
     */
    public warn(message: string): void {
        console.warn(this.formatMessage('WARN', message, 'yellow'));
    }

    /**
     * Log a message with the ERROR level
     *
     * @param message - Log message
     */
    public error(message: string): void {
        console.error(this.formatMessage('ERROR', message, 'red'));
    }

    /**
     * Log a message with the CRITICAL level
     *
     * @param message - Log message
     */
    public critical(message: string): void {
        console.error(this.formatMessage('CRITICAL', message, 'bgRedWhite'));
    }

    /**
     * Log a message with the SUCCESS level
     *
     * @param message - Log message
     */
    public success(message: string): void {
        console.log(this.formatMessage('SUCCESS', message, 'green'));
    }
}

export default Logger;
