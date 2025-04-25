import { Request, Response } from 'express';

import { IHttpController } from '@/presentation/http/contracts/controller';

export const adaptExpressRoute = (controller: IHttpController) => {
    return async (request: Request, response: Response): Promise<Response> => {
        const controllerResponse = await controller.handle({
            body: request.body,
            query: request.query,
            params: request.params,
            headers: request.headers
        });

        return response.status(controllerResponse.statusCode).json(controllerResponse.body);
    };
};
