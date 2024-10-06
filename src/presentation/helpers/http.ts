import { HttpResponse } from '../controllers/http';

export const badRequest = (message: string): HttpResponse => ({
    body: message,
    statusCode: 400,
});

export const forbidden = (message: string): HttpResponse => ({
    body: message,
    statusCode: 403,
});

export const unauthorized = (message: string): HttpResponse => ({
    body: message,
    statusCode: 401,
});

export const serverError = (): HttpResponse => ({
    body: 'Internal server error',
    statusCode: 500,
});

export const created = (data: any): HttpResponse => ({
    body: data,
    statusCode: 201,
});

export const ok = (data: any): HttpResponse => ({
    body: data,
    statusCode: 200,
});

export const noContent = (): HttpResponse => ({
    body: null,
    statusCode: 204,
});

export const conflict = (message: string): HttpResponse => ({
    body: message,
    statusCode: 409,
});
