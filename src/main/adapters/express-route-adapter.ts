import { Request, Response } from 'express';

import { IHttpController } from '@/presentation/controllers/http';

export const adaptRoute = (controller: IHttpController) => {
    return async (req: Request, res: Response): Promise<void> => {
        const request = {
            ...(req.body || {}),
            ...(req.params || {}),
        };

        const httpResponse = await controller.handle(request);

        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body
            });
        }
    };
};
