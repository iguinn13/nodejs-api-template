import { ISqlDatabaseClient } from '../contracts/client';
import { ILogger } from '@/infrastructure/logger/contract';

export const initSqlDatabase = async (sqlDatabaseClient: ISqlDatabaseClient, logger: ILogger): Promise<void> => {
    await sqlDatabaseClient.connect();

    logger.info('SQL Database connected!');
};
