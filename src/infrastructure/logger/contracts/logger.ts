export interface ILogger {
    info(input: ILogger.Info.Input): ILogger.Info.Output;
    error(input: ILogger.Error.Input): ILogger.Error.Output;
}

export namespace ILogger {
    export namespace Info {
        export type Input = {
            message: string;
        }

        export type Output = void;
    }

    export namespace Error {
        export type Input = {
            message: string;
        }

        export type Output = void;
    }
}
