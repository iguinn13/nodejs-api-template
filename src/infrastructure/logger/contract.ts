export interface ILogger {
    info(input: { message: string }): void;
    error(input: { message: string }): void;
}
