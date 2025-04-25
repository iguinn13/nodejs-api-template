import { Router } from 'express';

import { createUserSchema } from '@/validation/schemas/user/create';

import { adaptExpressRoute } from '@/main/adapters/express/route';
import { adaptExpressMiddleware } from '@/main/adapters/express/middleware';
import { makeCreateUserHttpController } from '@/main/factories/http/controllers/user/create';
import { makeValidatePayloadHttpMiddleware } from '@/main/factories/http/middlewares/validate-payload';

export default (router: Router): void => {
    router.post('/users',
        adaptExpressMiddleware(makeValidatePayloadHttpMiddleware(createUserSchema)) as any,
        adaptExpressRoute(makeCreateUserHttpController()) as any);
};
