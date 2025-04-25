import { PinoLogger } from '../adapters/pino/logger';

export const makePinoLogger = (): PinoLogger => {
    return PinoLogger.getInstance();
};
