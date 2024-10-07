import 'dotenv/config';

import { initSqlDatabase } from './infrastructure/database/sql/helpers/init';
import { initHttpServer } from './infrastructure/servers/http/helpers/init-http-server';
import { makeExpressHttpServer } from './infrastructure/servers/http/factories/make-express-http-server';
import { makeKnexDatabaseConnection } from './infrastructure/database/sql/factories/make-knex-database-connection';

(async (): Promise<void> => {
    try {
        await initSqlDatabase(makeKnexDatabaseConnection());
        await initHttpServer(makeExpressHttpServer());
    } catch (error) {
        console.error(`Error on init server: ${error}`);
    }
})();
