import { HttpResponse, IHttpController } from '..';

import { ILogger } from '@/infrastructure/logger/contract';
import { ICreateUserUseCase } from '@/domain/use-cases/user/create-user';
import { conflict, created, serverError } from '@/presentation/helpers/http';


export class CreateUserController implements IHttpController {
    public constructor(
        private readonly logger: ILogger,
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
                    this.logger.error(error.message);
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
