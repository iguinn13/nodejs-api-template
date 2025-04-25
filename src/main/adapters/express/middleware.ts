import { NextFunction, Request, Response } from 'express';

import { IHttpMiddleware } from '@/presentation/http/contracts/middleware';

export const adaptExpressMiddleware = (middleware: IHttpMiddleware) => {
    return async (request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
        const middlewareResponse = await middleware.handle({
            body: request.body,
            query: request.query,
            params: request.params,
            headers: request.headers
        });

        if (middlewareResponse && middlewareResponse.statusCode !== 200) {
            return response.status(middlewareResponse.statusCode).json(middlewareResponse.body);
        }

        return next();
    };
};
