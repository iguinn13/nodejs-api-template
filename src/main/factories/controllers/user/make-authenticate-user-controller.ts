import { makeAuthenticateUserUseCase } from '../../use-cases/make-authenticate-user';
import { AuthenticateUserController } from '../../../../presentation/controllers/http/user/authenticate-user-controller';

export const makeAuthenticateUserController = (): AuthenticateUserController => {
    const authenticateUserUseCase = makeAuthenticateUserUseCase();

    return new AuthenticateUserController(authenticateUserUseCase);
};
