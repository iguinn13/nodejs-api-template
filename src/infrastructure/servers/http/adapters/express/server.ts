import { join } from 'path';
import { readdirSync } from 'fs';
import express, { Router } from 'express';

import { ENV } from '@/config/env';
import { IHttpServer } from '../../contracts';

import { ILogger } from '@/infrastructure/logger/contract';
import { makeLogger } from '@/infrastructure/logger/factories/make-logger';

export class ExpressAdapter implements IHttpServer {
    private static instance: ExpressAdapter;

    private readonly port: number;
    private readonly logger: ILogger;
    private readonly expressInstance: express.Application;

    private constructor() {
        this.port = +ENV.HTTP_SERVER_PORT;
        this.logger = makeLogger();
        this.expressInstance = express();
    }

    public static getInstance(): ExpressAdapter {
        if (!ExpressAdapter.instance) ExpressAdapter.instance = new ExpressAdapter();
        return ExpressAdapter.instance;
    }

    public listen(): void {
        this.expressInstance.listen(this.port, () => this.logger.info({ message: `HTTP Server is running at port ${this.port}` }));
    }

    public async bootstrap(): Promise<void> {
        this.setUpMiddlewares();
        this.setUpRouters();
    }

    private setUpMiddlewares(): void {
        this.expressInstance.use(express.json());
    }

    private async setUpRouters(): Promise<void> {
        const router = Router();

        this.expressInstance.use('/api', router);

        const routersDir = join(__dirname, './routers');

        for (const file of readdirSync(routersDir)) {
            if (!file.endsWith('.ts')) continue;

            (await import(`${routersDir}/${file}`)).default(router);
        }
    }
}
