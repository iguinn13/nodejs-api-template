import { ExpressHttpServerAdapter } from '../express-server-adapter';

export const makeExpressHttpServer = (): ExpressHttpServerAdapter => {
    return ExpressHttpServerAdapter.getInstance();
};
