import { IUserRepository } from '../../protocols/repositories/user-repository';
import { IHashCryptographyService } from '../../protocols/cryptographies/hash-cryptography-service';

import { IAuthenticateUserUseCase } from '../../../domain/use-cases/user/authenticate-user-use-case';
import { IAccessTokenCryptographyService } from '../../protocols/cryptographies/access-token-cryptography-service';

export class AuthenticateUserUseCase implements IAuthenticateUserUseCase {
    public constructor(
        private readonly userRepository: IUserRepository,
        private readonly hashCryptographyService: IHashCryptographyService,
        private readonly accessTokenCryptographyService: IAccessTokenCryptographyService,
    ) { }

    public async execute(input: IAuthenticateUserUseCase.Input): Promise<IAuthenticateUserUseCase.Output> {
        const user = await this.userRepository.findByEmail(input.email);
        if (!user) throw new Error(IAuthenticateUserUseCase.Exceptions.USER_NOT_FOUND);

        const passwordIsCorrect = await this.hashCryptographyService.compare(input.password, user.password);
        if (!passwordIsCorrect) throw new Error(IAuthenticateUserUseCase.Exceptions.USER_NOT_FOUND);

        const token = this.accessTokenCryptographyService.generate({ userId: user.id });

        return { token };
    }
}
