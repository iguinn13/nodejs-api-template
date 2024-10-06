export type HttpResponse = {
    body: any;
    statusCode: number;
}

export interface IHttpController<T = any> {
    handle: (request: T) => Promise<HttpResponse>;
}
