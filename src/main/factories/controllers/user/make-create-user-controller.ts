import { makeCreateUserUseCase } from '../../use-cases/make-create-user';
import { CreateUserController } from '../../../../presentation/controllers/http/user/create-user-controller';

export const makeCreateUserController = (): CreateUserController => {
    const createUserUseCase = makeCreateUserUseCase();

    return new CreateUserController(createUserUseCase);
};
