import { IUserRepository } from '@/application/interfaces/repositories/user';
import { IAuthenticateUserUseCase } from '@/domain/use-cases/auth/authenticate-user';
import { InvalidCredentialsException } from '@/domain/exceptions/auth/invalid-credentials';
import { IHashCryptographyService } from '@/application/interfaces/services/cryptographies/hash';
import { IAccessTokenCryptographyService } from '@/application/interfaces/services/cryptographies/access-token';
import { AuthenticateUserUseCaseInput, AuthenticateUserUseCaseOutput } from '@/application/dtos/auth/authenticate-user';

export class AuthenticateUserUseCase implements IAuthenticateUserUseCase {
    public constructor(
        private readonly userRepository: IUserRepository,
        private readonly hashCryptographyService: IHashCryptographyService,
        private readonly accessTokenCryptographyService: IAccessTokenCryptographyService,
    ) { }

    public async execute(input: AuthenticateUserUseCaseInput): Promise<AuthenticateUserUseCaseOutput> {
        const user = await this.userRepository.findByEmail({ email: input.email });

        if (!user) throw new InvalidCredentialsException();

        const passwordIsCorrect = await this.hashCryptographyService.compare({
            data: input.password,
            hashedData: user.password
        });

        if (!passwordIsCorrect) throw new InvalidCredentialsException();

        const token = this.accessTokenCryptographyService.sign({
            data: user.id,
            ttl: 60 * 60
        });

        return { token };
    }
}
