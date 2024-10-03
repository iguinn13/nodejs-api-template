import { ZodSchema } from 'zod';
import { NextFunction, Request, Response } from 'express';

export const validateRequestPayloadMiddleware = (schema: ZodSchema) => {
    return (request: Request, response: Response, next: NextFunction): void | Response => {
        try {
            schema.parse(request.body);

            return next();
        } catch (error: any) {
            return response.status(400).json({ error: error?.errors[0]?.message });
        }
    };
};
