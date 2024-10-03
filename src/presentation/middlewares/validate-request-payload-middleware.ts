import { ZodSchema } from 'zod';
import { NextFunction, Request, Response } from 'express';

export const validateRequestPayloadMiddleware = (schema: ZodSchema) => {
    return async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            schema.parse(request.body);

            return next();
        } catch (error: any) {
            response.status(400).json({ error: error?.errors[0]?.message });
        }
    };
};
