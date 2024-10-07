import { KnexSqlDatabaseConnectionAdapter } from '../knex/connection';

export const makeKnexDatabaseConnection = (): KnexSqlDatabaseConnectionAdapter => {
    return KnexSqlDatabaseConnectionAdapter.getInstance();
};
