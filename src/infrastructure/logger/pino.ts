import pino from 'pino';

import { ILogger } from './contract';

export class PinoLoggerAdapter implements ILogger {
    private static instance: PinoLoggerAdapter;
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

    public static getInstance(): PinoLoggerAdapter {
        if (!PinoLoggerAdapter.instance) PinoLoggerAdapter.instance = new PinoLoggerAdapter();
        return PinoLoggerAdapter.instance;
    }

    public info(message: string): void {
        this.pinoInstance.info(message);
    }

    public error(message: string): void {
        this.pinoInstance.error(message);
    }
}
