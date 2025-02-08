import { CreateUserUseCase } from '@/data/use-cases/user/create-user-use-case';

import { BcryptAdapter } from '@/infrastructure/cryptographies/hash/bcrypt-adapter';
import { UserRepository } from '@/infrastructure/database/sql/knex/repositories/user';
import { makeKnexDatabaseConnection } from '@/infrastructure/database/sql/factories/make-knex-database-connection';

export const makeCreateUserUseCase = (): CreateUserUseCase => {
    const bcryptAdapter = new BcryptAdapter();
    const sqlDatabaseConnection = makeKnexDatabaseConnection();
    const userRepository = new UserRepository(sqlDatabaseConnection);

    return new CreateUserUseCase(
        bcryptAdapter,
        userRepository,
        userRepository
    );
};
