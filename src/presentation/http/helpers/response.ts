import { HttpResponse } from '../contracts/response';

export const httpCreated = (data?: any): HttpResponse => ({
    body: data ?? {},
    statusCode: 201
});

export const httpConflict = (message: string): HttpResponse => ({
    body: {
        error: message
    },
    statusCode: 409
});

export const httpServerError = (message?: string): HttpResponse => ({
    body: {
        error: message ?? 'Internal error'
    },
    statusCode: 500
});

export const httpBadRequest = (message: string): HttpResponse => ({
    body: {
        error: message
    },
    statusCode: 400
});
