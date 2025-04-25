import { User } from '@/core/domain/entities/user';

export interface ICreateUserRepository {
    create(input: ICreateUserRepository.Input): Promise<ICreateUserRepository.Output>;
}

export namespace ICreateUserRepository {
    export type Input = {
        user: User;
    }

    export type Output = void;
}
