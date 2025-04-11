import { ILogger } from '../contract';
import { PinoAdapter } from '../adapters/pino';

export const makeLogger = (): ILogger => {
    return PinoAdapter.getInstance();
};
