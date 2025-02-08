import { Request, Response, NextFunction } from 'express';

import { IHttpMiddleware } from '@/presentation/middlewares';

export const adaptMiddleware = (middleware: IHttpMiddleware) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const request = {
            ...(req.body || {}),
            ...(req.headers || {}),
        };

        const httpResponse = await middleware.handle(request);

        if (httpResponse.statusCode === 200) {
            Object.assign(req, httpResponse.body);
            next();
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body
            });
        }
    };
};
