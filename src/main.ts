import 'dotenv/config';

import { initSqlDatabase } from './infrastructure/database/sql/helpers/init';
import { initHttpServer } from './infrastructure/servers/http/helpers/init-http-server';
import { makeExpressHttpServer } from './infrastructure/servers/http/factories/make-express-http-server';

(async (): Promise<void> => {
    try {
        await initSqlDatabase();
        await initHttpServer(makeExpressHttpServer());
    } catch (error) {
        console.error(`Error on init server: ${error}`);
    }
})();
