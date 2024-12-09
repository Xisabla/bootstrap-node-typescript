/**
 * Module for logging messages with different log levels
 *
 * Provides a Logger class with methods for logging messages with different log levels.
 */

import c, { Color, colorize } from "./colors";

/**
 * Enum for log levels
 */
export enum LogLevel {
    LOG = "LOG",
    VERBOSE = "VERBOSE",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    CRITICAL = "CRITICAL",
    SUCCESS = "SUCCESS",
}

/**
 * Logger class
 *
 * Provides logging methods for different log levels.
 * Logs messages with a timestamp and the name of the logger.
 */
export default class Logger {
    /**
     * Name of the logger
     */
    private _name: string;

    /**
     * Colors to use for the prefix of each log level
     */
    private _levelColors: Record<LogLevel, Color | Color[]> = {
        [LogLevel.LOG]: "cyan",
        [LogLevel.VERBOSE]: "gray",
        [LogLevel.INFO]: "blue",
        [LogLevel.WARN]: "yellow",
        [LogLevel.ERROR]: "red",
        [LogLevel.CRITICAL]: ["bgRed", "white", "bright"],
        [LogLevel.SUCCESS]: "green",
    };

    /**
     * Colors to use for the timestamp and logger name
     */
    private _timestampColor: Color = "magenta";
    private _nameColor: Color = "cyan";

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
     * @param messages - Log messages
     * @param color - Optional color for the message
     * @returns Formatted log message
     */
    private formatMessage(level: LogLevel, messages: string[], color?: Color | Color[]): string {
        const timestamp = new Date().toISOString();
        let message = messages.join(" ");

        if (color) {
            message = colorize(color, message);
        }

        const levelColor = this._levelColors[level];

        const prefixTimestamp = `${c.green("[")}${colorize(this._timestampColor, timestamp)}${c.green("]")}`;
        const prefixName = `${c.green("[")}${colorize(this._nameColor, this._name)}${c.green("]")}`;
        const prefixLevel = `${c.green("[")}${colorize(levelColor, level)}${c.green("]")}`;
        const prefix = `${prefixTimestamp} ${prefixName} ${prefixLevel}`;

        return `${prefix} ${message}`;
    }

    // ========================================================================
    // Public logging methods
    // ========================================================================

    /**
     * Log messages with the LOG level
     *
     * @param messages - Log messages
     */
    public log(...messages: string[]): void {
        console.log(this.formatMessage(LogLevel.LOG, messages));
    }

    /**
     * Log messages with the VERBOSE level
     *
     * @param messages - Log messages
     */
    public verbose(...messages: string[]): void {
        console.log(this.formatMessage(LogLevel.VERBOSE, messages, "gray"));
    }

    /**
     * Log messages with the INFO level
     *
     * @param messages - Log messages
     */
    public info(...messages: string[]): void {
        console.log(this.formatMessage(LogLevel.INFO, messages, "blue"));
    }

    /**
     * Log messages with the WARN level
     *
     * @param messages - Log messages
     */
    public warn(...messages: string[]): void {
        console.warn(this.formatMessage(LogLevel.WARN, messages, "yellow"));
    }

    /**
     * Log messages with the ERROR level
     *
     * @param messages - Log messages
     */
    public error(...messages: string[]): void {
        console.error(this.formatMessage(LogLevel.ERROR, messages, "red"));
    }

    /**
     * Log messages with the CRITICAL level
     *
     * @param messages - Log messages
     */
    public critical(...messages: string[]): void {
        console.error(this.formatMessage(LogLevel.CRITICAL, messages, ["bgRed", "white"]));
    }

    /**
     * Log messages with the SUCCESS level
     *
     * @param messages - Log messages
     */
    public success(...messages: string[]): void {
        console.log(this.formatMessage(LogLevel.SUCCESS, messages, "green"));
    }
}
