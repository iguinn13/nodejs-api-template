import { AuthenticateUserUseCaseInput, AuthenticateUserUseCaseOutput } from '@/application/dtos/auth/authenticate-user';

export interface IAuthenticateUserUseCase {
    execute(input: AuthenticateUserUseCaseInput): Promise<AuthenticateUserUseCaseOutput>;
}
