import { sqlDatabaseConnection } from '../connection';

export const initSqlDatabase = async (): Promise<void> => {
    await sqlDatabaseConnection.raw('SELECT 1');

    console.log('SQL Database connected!');
};
