import 'dotenv/config';

import { makeLogger } from './infrastructure/logger/factories/make-logger';
import { initSqlDatabase } from './infrastructure/database/sql/helpers/init';
import { initHttpServer } from './infrastructure/servers/http/helpers/init';
import { makeExpressHttpServer } from './infrastructure/servers/http/factories/make-express-http-server';
import { makePrismaDatabaseConnection } from './infrastructure/database/sql/factories/make-prisma-client';

const logger = makeLogger();

(async (): Promise<void> => {
    try {
        await initSqlDatabase(makePrismaDatabaseConnection(), logger);
        await initHttpServer(makeExpressHttpServer());
    } catch (error) {
        logger.error(`Error on init server: ${error}`);
        process.exit(1);
    }
})();
