import { AuthenticateUserUseCase } from '../../../data/use-cases/user/authenticate-user-use-case';

import { BcryptAdapter } from '../../../infrastructure/cryptographies/hash/bcrypt-adapter';
import { JWTAdapter } from '../../../infrastructure/cryptographies/access-token/jwt-adapter';
import { UserRepository } from '../../../infrastructure/database/sql/repositories/user';

export const makeAuthenticateUserUseCase = (): AuthenticateUserUseCase => {
    const jwtAdapter = new JWTAdapter();
    const bcryptAdapter = new BcryptAdapter();
    const userRepository = new UserRepository();

    return new AuthenticateUserUseCase(bcryptAdapter, jwtAdapter, userRepository);
};
