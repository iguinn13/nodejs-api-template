import { AuthenticateUserUseCase } from '@/application/use-cases/auth/authenticate-user';

import { BcryptAdapter } from '@/infrastructure/cryptographies/hash/bcrypt-adapter';
import { JWTAdapter } from '@/infrastructure/cryptographies/access-token/jwt-adapter';
import { makeKnexDatabaseConnection } from '@/infrastructure/database/sql/factories/make-knex-database-connection';

export const makeAuthenticateUserUseCase = (): AuthenticateUserUseCase => {
    const jwtAdapter = new JWTAdapter();
    const bcryptAdapter = new BcryptAdapter();

    const sqlDatabaseConnection = makeKnexDatabaseConnection();
    const userRepository = new UserRepository(sqlDatabaseConnection);

    return new AuthenticateUserUseCase(bcryptAdapter, jwtAdapter, userRepository);
};
