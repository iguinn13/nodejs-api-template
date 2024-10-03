import { AuthenticateUserUseCase } from '../../../../data/use-cases/user/authenticate-user-use-case';
import { AuthenticateUserController } from '../../../../presentation/controllers/http/user/authenticate-user-controller';

import { UserRepository } from '../../../../infrastructure/database/sql/repositories/user-repository';
import { HashCryptographyService } from '../../../../infrastructure/cryptographies/hash-cryptography-service';
import { AccessTokenCryptographyService } from '../../../../infrastructure/cryptographies/access-token-cryptography-service';

export const makeAuthenticateUserController = (): AuthenticateUserController => {
    const userRepository = new UserRepository();
    const hashCryptographyService = new HashCryptographyService();
    const accessTokenCryptographyService = new AccessTokenCryptographyService();

    const authenticateUserUseCase = new AuthenticateUserUseCase(
        userRepository,
        hashCryptographyService,
        accessTokenCryptographyService
    );

    return new AuthenticateUserController(authenticateUserUseCase);
};
