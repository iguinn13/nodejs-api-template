import { Router } from 'express';

import { makeCreateUserController } from '../factories/controllers/user/make-create-user-controller';
import { makeAuthenticateUserController } from '../factories/controllers/user/make-authenticate-user-controller';

import { validateRequestPayloadMiddleware } from '../../presentation/middlewares/validate-request-payload-middleware';

import { createUserControllerSchema } from '../../validation/controllers/schemas/create-user-controller-schema';
import { authenticateUserControllerSchema } from '../../validation/controllers/schemas/authenticate-user-controller-schema';


export default (router: Router): void => {
    router.post(
        '/users',
        validateRequestPayloadMiddleware(createUserControllerSchema),
        (request, response) => makeCreateUserController().handle(request, response),
    );

    router.post(
        '/users/auth',
        validateRequestPayloadMiddleware(authenticateUserControllerSchema),
        (request, response) => makeAuthenticateUserController().handle(request, response),
    );
};
