import { makeCreateUserUseCase } from '@/main/factories/use-cases/user/create';
import { CreateUserController } from '@/presentation/http/controllers/user/create';

export const makeCreateUserHttpController = (): CreateUserController => {
    const createUserUseCase = makeCreateUserUseCase();

    return new CreateUserController(createUserUseCase);
};
