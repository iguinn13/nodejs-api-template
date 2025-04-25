import { HttpRequest } from '../../contracts/request';
import { HttpResponse } from '../../contracts/response';
import { IHttpController } from '../../contracts/controller';

import { HttpResponseException } from '../../exceptions/response';
import { httpConflict, httpCreated, httpServerError } from '../../helpers/response';

import { ICreateUserUseCase } from '@/core/domain/use-cases/user/create';
import { EmailAlreadyRegisteredException } from '@/core/domain/exceptions/user/email-already-registered';

export class CreateUserController implements IHttpController {
    public constructor(
        private readonly createUserUseCase: ICreateUserUseCase
    ) { }

    public async handle(request: HttpRequest): Promise<HttpResponse> {
        try {
            const input: ICreateUserUseCase.Input = {
                name: request.body.name,
                email: request.body.email
            };

            await this.createUserUseCase.execute(input);

            return httpCreated();
        } catch (error: any) {
            if (error instanceof EmailAlreadyRegisteredException) {
                throw new HttpResponseException(httpConflict(error.message));
            }

            throw new HttpResponseException(httpServerError(error.message));
        }
    }
}
