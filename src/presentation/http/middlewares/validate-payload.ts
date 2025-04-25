import { ZodError, ZodSchema } from 'zod';

import { HttpRequest } from '../contracts/request';
import { HttpResponse } from '../contracts/response';
import { IHttpMiddleware } from '../contracts/middleware';

import { httpBadRequest, httpServerError } from '../helpers/response';
export class ValidatePayloadHttpMiddleware implements IHttpMiddleware {
    public constructor(private readonly schema: ZodSchema) {}

    public async handle(request: HttpRequest): Promise<HttpResponse | void> {
        try {
            const payload = {
                ...request.body,
                ...request.query,
                ...request.params,
                ...request.headers
            };

            this.schema.parse(payload);
        } catch (error: any) {
            if (error instanceof ZodError) {
                return httpBadRequest(error.errors[0].message);
            }

            return httpServerError();
        }
    }
}
