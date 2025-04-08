import pino from 'pino';

import { ILogger } from './contract';

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
        if (!PinoLogger.instance) PinoLogger.instance = new PinoLogger();
        return PinoLogger.instance;
    }

    public info(message: string): void {
        this.pinoInstance.info(message);
    }

    public error(message: string): void {
        this.pinoInstance.error(message);
    }
}
