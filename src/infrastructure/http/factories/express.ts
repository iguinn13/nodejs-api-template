import { ExpressHttpServer } from '../adapters/express/server';
import { makePinoLogger } from '@/infrastructure/logger/factories/pino';

export const makeExpressHttpServer = (): ExpressHttpServer => {
    const logger = makePinoLogger();

    return new ExpressHttpServer(logger);
};
