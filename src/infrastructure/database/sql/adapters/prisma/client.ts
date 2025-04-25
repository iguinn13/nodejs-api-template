import { PrismaClient } from '@prisma/client';

import { ISqlDatabaseClient } from '../../contracts/client';

type Adapter = PrismaClient;

export class PrismaSqlDatabaseClient implements ISqlDatabaseClient<Adapter> {
    private static instance: PrismaSqlDatabaseClient;
    private readonly prismaClient: Adapter;

    private constructor() {
        this.prismaClient = new PrismaClient();
    }

    public static getInstance(): PrismaSqlDatabaseClient {
        if (!PrismaSqlDatabaseClient.instance) {
            PrismaSqlDatabaseClient.instance = new PrismaSqlDatabaseClient();
        }

        return PrismaSqlDatabaseClient.instance;
    }

    public getClient(): Adapter {
        return this.prismaClient;
    }

    public async connect(): Promise<void> {
        return this.prismaClient.$connect();
    }
}
