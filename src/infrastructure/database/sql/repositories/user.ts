import { sqlDatabaseConnection } from '../connection';
import { User } from '../../../../domain/entities/user';

import { ICreateUserRepository } from '../../../../data/contracts/repositories/user/create';
import { IFindUserByEmailRepository } from '../../../../data/contracts/repositories/user/find-by-email';

export class UserRepository implements ICreateUserRepository, IFindUserByEmailRepository {
    private readonly TABLE = 'public.tb_users';

    public async create(user: User): Promise<User> {
        const [createdUser] = await sqlDatabaseConnection(this.TABLE).insert(user).returning('*');

        return createdUser;
    }

    public async findByEmail(email: string): Promise<User | null> {
        const user = await sqlDatabaseConnection(this.TABLE).where({ email }).first();
        return user || null;
    }
}
