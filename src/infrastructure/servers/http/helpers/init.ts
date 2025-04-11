import { IHttpServer } from '../contracts';

export const initHttpServer = async (httpServer: IHttpServer): Promise<void> => {
    await httpServer.bootstrap();

    httpServer.listen();
};
