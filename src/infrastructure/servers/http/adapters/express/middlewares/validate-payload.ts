import { ZodTypeAny, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

type ValidationSchemas = {
  body?: ZodTypeAny;
  query?: ZodTypeAny;
  params?: ZodTypeAny;
};

export function validatePayload(schemas: ValidationSchemas) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void {
    const originalHandler = descriptor.value;

    const middleware = (req: Request, res: Response, next: NextFunction): Response | void => {
      try {
        if (schemas.body) {
          req.body = schemas.body.parse(req.body);
        }

        if (schemas.query) {
          req.query = schemas.query.parse(req.query);
        }

        if (schemas.params) {
          req.params = schemas.params.parse(req.params);
        }

        return next();
      } catch (error) {
        if (error instanceof ZodError) {
          return res.status(400).json({
            message: 'Validation failed',
            issues: error.errors
          });
        }

        return next(error);
      }
    };

    descriptor.value = [middleware, originalHandler];
  };
}
