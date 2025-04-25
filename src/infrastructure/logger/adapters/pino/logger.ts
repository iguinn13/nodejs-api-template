import pino from 'pino';

import { ILogger } from '../../contracts/logger';

export class PinoLogger implements ILogger {
    private static instance: PinoLogger;
    private readonly pinoInstance: pino.Logger;

    private constructor() {
        this.pinoInstance = pino({
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                },
            },
        });
    }

    public static getInstance(): PinoLogger {
        if (!PinoLogger.instance) {
            PinoLogger.instance = new PinoLogger();
        }

        return PinoLogger.instance;
    }

    public info(input: ILogger.Info.Input): ILogger.Info.Output {
        this.pinoInstance.info(input.message);
    }

    public error(input: ILogger.Error.Input): ILogger.Error.Output {
        this.pinoInstance.error(input.message);
    }
}
