import { ILogger } from '@/infrastructure/logger/contract';
import { ISqlDatabaseConnection } from '../contracts/connection';

export const initSqlDatabase = async (sqlDatabaseConnection: ISqlDatabaseConnection, logger: ILogger): Promise<void> => {
    await sqlDatabaseConnection.connect();
    await sqlDatabaseConnection.getClient().raw('SELECT 1');

    logger.info('SQL Database connected!');
};
