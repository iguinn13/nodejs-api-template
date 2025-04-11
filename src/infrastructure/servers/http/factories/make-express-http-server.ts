import { ExpressAdapter } from '../adapters/express/server';

export const makeExpressHttpServer = (): ExpressAdapter => {
    return ExpressAdapter.getInstance();
};
