import { Knex } from 'knex';

import { ENV } from '../../../../config/env';

export const knexConfig: Knex.Config = {
    client: ENV.SQL_DATABASE_DIALECT,
    connection: {
        host: ENV.SQL_DATABASE_HOST,
        user: ENV.SQL_DATABASE_USER,
        port: +ENV.SQL_DATABASE_PORT,
        database: ENV.SQL_DATABASE_NAME,
        password: ENV.SQL_DATABASE_PASSWORD,
    },
};
