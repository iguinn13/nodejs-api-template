import { PrismaClient } from '@prisma/client';

import { ISqlDatabaseClient } from '../../contracts/client';

type AdapterInterface = PrismaClient;

export class PrismaAdapter implements ISqlDatabaseClient<AdapterInterface> {
    private prisma?: PrismaClient;
    private static instance: PrismaAdapter;

    private constructor() { }

    public static getInstance(): PrismaAdapter {
        if (!PrismaAdapter.instance) PrismaAdapter.instance = new PrismaAdapter();
        return PrismaAdapter.instance;
    }

    public getClient(): AdapterInterface {
        if (!this.prisma) throw new Error('To use client the database must be connected!');
        return this.prisma;
    }

    public async connect(): Promise<void> {
        if (this.prisma) throw new Error('SQL Database already is connected');
        this.prisma = new PrismaClient();
    }
}
