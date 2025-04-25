import { User } from '@/core/domain/entities/user';

export interface IGetUserByEmailRepository {
    getByEmail(input: IGetUserByEmailRepository.Input): Promise<IGetUserByEmailRepository.Output>;
}

export namespace IGetUserByEmailRepository {
    export type Input = {
        email: string;
    }

    export type Output = User | null;
}
