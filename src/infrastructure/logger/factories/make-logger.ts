import { ILogger } from '../contract';
import { PinoLoggerAdapter } from '../pino';

export const makeLogger = (): ILogger => {
    return PinoLoggerAdapter.getInstance();
};
