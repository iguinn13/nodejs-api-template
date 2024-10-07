import { ISqlDatabaseConnection } from '../contracts/connection';

export const initSqlDatabase = async (sqlDatabaseConnection: ISqlDatabaseConnection): Promise<void> => {
    await sqlDatabaseConnection.connect();
    await sqlDatabaseConnection.getClient().raw('SELECT 1');

    console.log('SQL Database connected!');
};
