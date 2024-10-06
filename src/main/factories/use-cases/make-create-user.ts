import { CreateUserUseCase } from '../../../data/use-cases/user/create-user-use-case';

import { BcryptAdapter } from '../../../infrastructure/cryptographies/hash/bcrypt-adapter';
import { UserRepository } from '../../../infrastructure/database/sql/repositories/user';

export const makeCreateUserUseCase = (): CreateUserUseCase => {
    const bcryptAdapter = new BcryptAdapter();
    const userRepository = new UserRepository();

    return new CreateUserUseCase(
        bcryptAdapter,
        userRepository,
        userRepository
    );
};
