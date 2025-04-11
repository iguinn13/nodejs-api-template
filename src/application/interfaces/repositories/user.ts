import { User } from '@/domain/entities/user';

export interface IUserRepository {
    create(input: { user: User }): Promise<void>;
    findByEmail(input: { email: string }): Promise<User | null>;
}
