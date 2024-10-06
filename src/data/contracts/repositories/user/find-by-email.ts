import { User } from '../../../../domain/entities/user';

export interface IFindUserByEmailRepository {
    findByEmail(email: string): Promise<User | null>;
}
