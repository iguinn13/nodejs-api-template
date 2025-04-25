import { ZodSchema } from 'zod';

import { ValidatePayloadHttpMiddleware } from '@/presentation/http/middlewares/validate-payload';

export const makeValidatePayloadHttpMiddleware = (schema: ZodSchema): ValidatePayloadHttpMiddleware => {
    return new ValidatePayloadHttpMiddleware(schema);
};
