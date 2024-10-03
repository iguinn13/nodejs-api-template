import { Router } from 'express';

import { makeCreateUserController } from '../factories/controllers/user/make-create-user-controller';
import { createUserControllerSchema } from '../../validation/controllers/schemas/create-user-controller-schema';
import { validateRequestPayloadMiddleware } from '../../presentation/middlewares/validate-request-payload-middleware';

export default (router: Router): void => {
    router.post(
        '/users',
        validateRequestPayloadMiddleware(createUserControllerSchema) as any,
        (request, response) => makeCreateUserController().handle(request, response) as any,
    );
};
