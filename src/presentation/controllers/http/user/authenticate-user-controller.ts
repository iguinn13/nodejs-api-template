import { HttpResponse, IHttpController } from '..';
import { serverError, unauthorized } from '../../../helpers/http';
import { IAuthenticateUserUseCase } from '../../../../domain/use-cases/user/authenticate-user-use-case';

export class AuthenticateUserController implements IHttpController {
    public constructor(
        private readonly authenticateUserUseCase: IAuthenticateUserUseCase,
    ) { }

    public async handle(request: AuthenticateUserController.Request): Promise<HttpResponse> {
        try {
            const input: IAuthenticateUserUseCase.Input = {
                email: request.email,
                password: request.password,
            };

            const output = await this.authenticateUserUseCase.execute(input);

            return {
                body: output,
                statusCode: 200,
            };
        } catch (error: any) {
            switch (error.message) {
                case IAuthenticateUserUseCase.Exceptions.USER_NOT_FOUND: {
                    return unauthorized(IAuthenticateUserUseCase.Exceptions.USER_NOT_FOUND);
                }
                default: {
                    console.error(error.message);
                    return serverError();
                }
            }
        }
    }
}

export namespace AuthenticateUserController {
    export type Request = {
      email: string;
      password: string;
    }
}
