import 'dotenv/config';

import { makeLogger } from './infrastructure/logger/factories/make-logger';
import { initSqlDatabase } from './infrastructure/database/sql/helpers/init';
import { initHttpServer } from './infrastructure/servers/http/helpers/init-http-server';
import { makeExpressHttpServer } from './infrastructure/servers/http/factories/make-express-http-server';
import { makeKnexDatabaseConnection } from './infrastructure/database/sql/factories/make-knex-database-connection';

const logger = makeLogger();

(async (): Promise<void> => {
    try {
        await initSqlDatabase(makeKnexDatabaseConnection(), logger);
        await initHttpServer(makeExpressHttpServer());
    } catch (error) {
        logger.error(`Error on init server: ${error}`);
        process.exit(1);
    }
})();
