import { ZodSchema } from 'zod';

import { ValidateRequestPayloadMiddleware } from '../../../presentation/middlewares/validate-request-payload-middleware';

export const makeValidateRequestPayload = (schema: ZodSchema): ValidateRequestPayloadMiddleware => {
    return new ValidateRequestPayloadMiddleware(schema);
};
