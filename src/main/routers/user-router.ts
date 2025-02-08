import { Router } from 'express';

import { createUserControllerSchema } from '@/validation/controllers/schemas/create-user-controller-schema';
import { authenticateUserControllerSchema } from '@/validation/controllers/schemas/authenticate-user-controller-schema';

import { adaptRoute } from '../adapters/express-route-adapter';
import { adaptMiddleware } from '../adapters/express-middleware-adapter';

import { makeValidateRequestPayload } from '../factories/middlewares/make-validate-request-payload';
import { makeCreateUserController } from '../factories/controllers/user/make-create-user-controller';
import { makeAuthenticateUserController } from '../factories/controllers/user/make-authenticate-user-controller';

export default (router: Router): void => {
    router.post(
        '/users',
        adaptMiddleware(makeValidateRequestPayload(createUserControllerSchema)),
        adaptRoute(makeCreateUserController()),
    );

    router.post(
        '/users/auth',
        adaptMiddleware(makeValidateRequestPayload(authenticateUserControllerSchema)),
        adaptRoute(makeAuthenticateUserController()),
    );
};
