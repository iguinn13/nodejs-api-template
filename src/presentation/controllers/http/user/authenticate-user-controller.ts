import { Request, Response } from 'express';

import { IHttpController } from '..';
import { IAuthenticateUserUseCase } from '../../../../domain/use-cases/user/authenticate-user-use-case';

export class AuthenticateUserController implements IHttpController {
    public constructor(
        private readonly authenticateUserUseCase: IAuthenticateUserUseCase,
    ) { }

    public async handle(request: Request, response: Response): Promise<void> {
        try {
            const input: IAuthenticateUserUseCase.Input = {
                email: request.body.email,
                password: request.body.password,
            };

            const output = await this.authenticateUserUseCase.execute(input);

            response.status(200).json(output);
        } catch (error: any) {
            console.error(error.message);

            switch (error.message) {
                case IAuthenticateUserUseCase.Exceptions.USER_NOT_FOUND: {
                    response.status(401).json({ error: error.message });
                }
                default: {
                    response.status(500).json({ error: 'Internal server error' });
                }
            }
        }
    }
}
