import { makeLogger } from '@/infrastructure/logger/factories/make-logger';
import { makeAuthenticateUserUseCase } from '../../use-cases/make-authenticate-user';

import { AuthenticateUserController } from '@/presentation/controllers/http/user/authenticate-user-controller';

export const makeAuthenticateUserController = (): AuthenticateUserController => {
    const logger = makeLogger();
    const authenticateUserUseCase = makeAuthenticateUserUseCase();

    return new AuthenticateUserController(logger, authenticateUserUseCase);
};
