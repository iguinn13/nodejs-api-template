/* eslint-disable @typescript-eslint/no-unused-vars */
import { join } from 'node:path';
import { readdirSync } from 'node:fs';
import express, { NextFunction, Request, Response, Router } from 'express';

import { IHttpServer } from '../../contracts/server';
import { ILogger } from '@/infrastructure/logger/contracts/logger';
import { HttpResponseException } from '@/presentation/http/exceptions/response';

export class ExpressHttpServer implements IHttpServer {
    private readonly logger: ILogger;
    private readonly expressInstance: express.Application;

    public constructor(logger: ILogger) {
        this.logger = logger;
        this.expressInstance = express();

        this.bootstrap();
    }

    private bootstrap(): void {
        this.setUpMiddlewares();
        this.setUpRouters();
        this.setUpGlobalErrorMiddleware();
    }

    private setUpMiddlewares(): void {
        this.expressInstance.use(express.json());
    }

    private setUpRouters(): void {
        const router = Router();

        this.expressInstance.use('/api', router);

        readdirSync(join(__dirname, './routers')).map(async (file) => {
          if (file.endsWith('.ts')) {
            (await import(`./routers/${file}`)).default(router);
          }
        });
    }

    private setUpGlobalErrorMiddleware(): void {
        this.expressInstance.use((error: any, request: Request, response: Response, next: NextFunction): any => {
            this.logger.error({ message: `Error on request ${request.url}: ${error.message}` });

            if (error instanceof HttpResponseException && error.response.statusCode !== 500) {
                return response.status(error.response.statusCode).json({ error: error.response.body.error });
            }

            return response.status(500).json({ error: 'Internal server error' });
        });
    }

    public listen(input: IHttpServer.Listen.Input): IHttpServer.Listen.Output {
        this.expressInstance.listen(input.port, () => {
            this.logger.info({ message: `HTTP SERVER: ${input.port}` });
        });
    }
}
