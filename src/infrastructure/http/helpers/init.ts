import { IHttpServer } from '../contracts/server';

export const initHttpServer = (port: number,httpServer: IHttpServer): void => {
    return httpServer.listen({ port });
};
