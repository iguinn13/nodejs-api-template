import pino from 'pino';

import { ILogger } from '../contract';

export class PinoAdapter implements ILogger {
    private static instance: PinoAdapter;
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

    public static getInstance(): PinoAdapter {
        if (!PinoAdapter.instance) PinoAdapter.instance = new PinoAdapter();
        return PinoAdapter.instance;
    }

    public info(input: { message: string }): void {
        this.pinoInstance.info(input.message);
    }

    public error(input: { message: string }): void {
        this.pinoInstance.error(input.message);
    }
}
