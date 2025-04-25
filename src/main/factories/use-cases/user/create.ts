import { ICreateUserUseCase } from '@/core/domain/use-cases/user/create';
import { CreateUserUseCase } from '@/core/application/use-cases/user/create';

import { CryptoUUIDGenerator } from '@/infrastructure/services/generators/uuid/adapters/crypto';
import { PrismaUserRepository } from '@/infrastructure/database/sql/adapters/prisma/repositories/user';

export const makeCreateUserUseCase = (): ICreateUserUseCase => {
    const uuidGenerator = new CryptoUUIDGenerator();
    const userRepository = new PrismaUserRepository();

    return new CreateUserUseCase(
        uuidGenerator,
        userRepository,
        userRepository
    );
};
