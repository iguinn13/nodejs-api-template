import { join } from 'path';
import { readdirSync } from 'fs';
import express, { Router } from 'express';

import { IHttpServer } from '.';
import { ENV } from '@/config/env';
import { ILogger } from '@/infrastructure/logger/contract';
import { makeLogger } from '@/infrastructure/logger/factories/make-logger';

export class ExpressHttpServerAdapter implements IHttpServer {
    private static instance: ExpressHttpServerAdapter;

    private readonly port: number;
    private readonly logger: ILogger;
    private readonly expressInstance: express.Application;

    private constructor() {
        this.port = +ENV.HTTP_SERVER_PORT;
        this.logger = makeLogger();
        this.expressInstance = express();
    }

    public static getInstance(): ExpressHttpServerAdapter {
        if (!ExpressHttpServerAdapter.instance) ExpressHttpServerAdapter.instance = new ExpressHttpServerAdapter();
        return ExpressHttpServerAdapter.instance;
    }

    public listen(): void {
        this.expressInstance.listen(this.port, () => this.logger.info(`HTTP Server is running at port ${this.port}`));
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

        const routersDir = join(__dirname, '../../../main/routers');

        for (const file of readdirSync(routersDir)) {
            if (!file.endsWith('.ts')) continue;

            (await import(`${routersDir}/${file}`)).default(router);
        }
    }
}
