import { PinoLogger } from '../pino';
import { ILogger } from '../contract';

export const makeLogger = (): ILogger => {
    return PinoLogger.getInstance();
};
