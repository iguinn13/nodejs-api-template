import { Knex } from 'knex';

import { User } from '@/domain/entities/user';

import { ICreateUserRepository } from '@/data/contracts/repositories/user/create-user';
import { IFindUserByEmailRepository } from '@/data/contracts/repositories/user/find-user-by-email';

import { ISqlDatabaseConnection } from '../../contracts/connection';

export class UserRepository implements ICreateUserRepository, IFindUserByEmailRepository {
    private readonly databaseClient: Knex;
    private readonly TABLE = 'public.tb_users';

    public constructor(sqlDatabaseConnection: ISqlDatabaseConnection<Knex>) {
        this.databaseClient = sqlDatabaseConnection.getClient();
    }

    public async create(user: User): Promise<User> {
        const [createdUser] = await this.databaseClient(this.TABLE).insert(user).returning('*');

        return createdUser;
    }

    public async findByEmail(email: string): Promise<User | null> {
        const user = await this.databaseClient(this.TABLE).where({ email }).first();
        return user || null;
    }
}
