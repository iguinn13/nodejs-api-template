import { ISqlDatabaseClient } from '../contracts/client';
import { PrismaSqlDatabaseClient } from '../adapters/prisma/client';

export const makePrismaSqlDatabaseClient = (): ISqlDatabaseClient => {
    return PrismaSqlDatabaseClient.getInstance();
};
