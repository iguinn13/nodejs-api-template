import { makeLogger } from '@/infrastructure/logger/factories/make-logger';
import { CreateUserController } from '@/presentation/controllers/http/user/create-user-controller';

import { makeCreateUserUseCase } from '../../use-cases/make-create-user';

export const makeCreateUserController = (): CreateUserController => {
    const logger = makeLogger();
    const createUserUseCase = makeCreateUserUseCase();

    return new CreateUserController(logger, createUserUseCase);
};
