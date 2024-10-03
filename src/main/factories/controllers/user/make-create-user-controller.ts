import { CreateUserUseCase } from '../../../../data/use-cases/user/create-user-use-case';
import { CreateUserController } from '../../../../presentation/controllers/http/create-user-controller';

import { UserRepository } from '../../../../infrastructure/database/sql/repositories/user-repository';
import { HashCryptographyService } from '../../../../infrastructure/cryptographies/hash-cryptography-service';

export const makeCreateUserController = (): CreateUserController => {
    const userRepository = new UserRepository();
    const hashCryptographyService = new HashCryptographyService();
    const createUserUseCase = new CreateUserUseCase(userRepository, hashCryptographyService);

    return new CreateUserController(createUserUseCase);
};
