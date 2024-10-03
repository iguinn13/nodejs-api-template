import { Request, Response } from 'express';

import { IHttpController } from '.';
import { ICreateUserUseCase } from '../../../domain/use-cases/user/create-user-use-case';

export class CreateUserController implements IHttpController {
    public constructor(
        private readonly createUserUseCase: ICreateUserUseCase,
    ) { }

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const input: ICreateUserUseCase.Input = {
                name: request.body.name,
                email: request.body.email,
                password: request.body.password,
            };

            const output = await this.createUserUseCase.execute(input);

            return response.status(201).json(output);
        } catch (error: any) {
            console.error(error.message);

            switch (error.message) {
                case ICreateUserUseCase.Exceptions.EMAIL_CONFLICT: {
                    return response.status(409).json({ error: error.message });
                }
                default: {
                    return response.status(500).json({ error: 'Internal server error' });
                }
            }
        }
    }
}
