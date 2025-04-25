import 'dotenv/config';

import { ENV } from './config/env';

import { initHttpServer } from './infrastructure/http/helpers/init';
import { makePinoLogger } from './infrastructure/logger/factories/pino';
import { makeExpressHttpServer } from './infrastructure/http/factories/express';
import { initSqlDatabaseConnection } from './infrastructure/database/sql/helpers/init';
import { makePrismaSqlDatabaseClient } from './infrastructure/database/sql/factories/prisma';

const logger = makePinoLogger();

(async (): Promise<void> => {
    try {
        await initSqlDatabaseConnection(makePrismaSqlDatabaseClient());
        initHttpServer(ENV.HTTP_SERVER_PORT, makeExpressHttpServer());
    } catch (error: any) {
        logger.error({ message: `Error on init: ${error}` });
        process.exit(1);
    }
})();
