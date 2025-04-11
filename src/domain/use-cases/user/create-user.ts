import { CreateUserUseCaseInput, CreateUserUseCaseOutput } from '@/application/dtos/user/create-user';

export interface ICreateUserUseCase {
    execute(input: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput>;
}
