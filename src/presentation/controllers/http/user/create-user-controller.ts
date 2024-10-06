import { HttpResponse, IHttpController } from '..';
import { conflict, created, serverError } from '../../../helpers/http';
import { ICreateUserUseCase } from '../../../../domain/use-cases/user/create-user-use-case';

export class CreateUserController implements IHttpController {
    public constructor(
        private readonly createUserUseCase: ICreateUserUseCase,
    ) { }

    public async handle(request: CreateUserController.Request): Promise<HttpResponse> {
        try {
            const input: ICreateUserUseCase.Input = {
                name: request.name,
                email: request.email,
                password: request.password,
            };

            const output = await this.createUserUseCase.execute(input);

            return created(output);
        } catch (error: any) {
            switch (error.message) {
                case ICreateUserUseCase.Exceptions.EMAIL_CONFLICT: {
                    return conflict(ICreateUserUseCase.Exceptions.EMAIL_CONFLICT);
                }
                default: {
                    console.error(error.message);
                    return serverError();
                }
            }
        }
    }
}

export namespace CreateUserController {
    export type Request = {
        name: string;
        email: string;
        password: string;
    }
}
