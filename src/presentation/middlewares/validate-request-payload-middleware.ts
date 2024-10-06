import { ZodSchema } from 'zod';

import { IHttpMiddleware } from '.';
import { badRequest, ok } from '../helpers/http';
import { HttpResponse } from '../controllers/http';

export class ValidateRequestPayloadMiddleware implements IHttpMiddleware {
    public constructor(
        private readonly schema: ZodSchema
    ) {}

    public async handle(request: AuthMiddleware.Request): Promise<HttpResponse> {
        try {
            this.schema.parse(request);

            return ok({});
        } catch (error: any) {
            return badRequest(error?.errors[0]?.message);
        }
    }
}

export namespace AuthMiddleware {
    export type Request = any;
}
