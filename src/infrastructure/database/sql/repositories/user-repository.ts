import { sqlDatabaseConnection } from '../connection';
import { User } from '../../../../domain/entities/user';
import { IUserRepository } from '../../../../data/protocols/repositories/user-repository';

export class UserRepository implements IUserRepository {
    private readonly TABLE = 'public.tb_users';

    public async create(user: User): Promise<User> {
        console.log(user);

        const [createdUser] = await sqlDatabaseConnection(this.TABLE).insert(user).returning('*');

        return createdUser;
    }

    public async findById(id: string): Promise<User | null> {
        const user = await sqlDatabaseConnection(this.TABLE).where({ id }).first();
        return user || null;
    }

    public async findByEmail(email: string): Promise<User | null> {
        const user = await sqlDatabaseConnection(this.TABLE).where({ email }).first();
        return user || null;
    }

    public async update(user: User): Promise<User> {
        const [updatedUser] = await sqlDatabaseConnection(this.TABLE).where({ id: user.id }).update(user).returning('*');
        return updatedUser;
    }

    public async delete(id: string): Promise<void> {
        await sqlDatabaseConnection(this.TABLE).where({ id }).del();
    }
}
