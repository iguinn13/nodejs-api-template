import { ISqlDatabaseClient } from '../contracts/client';
import { makePinoLogger } from '@/infrastructure/logger/factories/pino';

const logger = makePinoLogger();

export const initSqlDatabaseConnection = async (sqlDatabaseClient: ISqlDatabaseClient): Promise<void> => {
    await sqlDatabaseClient.connect();

    logger.info({ message: 'SQL DATABASE CONNECTED' });
};
