import knex, { Knex } from 'knex';
import knexStringcase from 'knex-stringcase';

import { knexConfig } from './config';
import { ISqlDatabaseConnection } from '../contracts/connection';

export class KnexSqlDatabaseConnectionAdapter implements ISqlDatabaseConnection {
    private knex?: Knex;
    private static instance: KnexSqlDatabaseConnectionAdapter;

    private constructor() { }

    public static getInstance(): KnexSqlDatabaseConnectionAdapter {
        if (!KnexSqlDatabaseConnectionAdapter.instance) KnexSqlDatabaseConnectionAdapter.instance = new KnexSqlDatabaseConnectionAdapter();
        return KnexSqlDatabaseConnectionAdapter.instance;
    }

    public getClient(): Knex {
        if (!this.knex) throw new Error('To use client the database must be connected!');
        return this.knex;
    }

    public async connect(): Promise<void> {
        if (this.knex) throw new Error('SQL Database already is connected');
        this.knex = knex(knexStringcase(knexConfig));
    }
}
