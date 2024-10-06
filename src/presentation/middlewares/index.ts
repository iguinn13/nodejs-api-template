import { HttpResponse } from '../controllers/http';

export interface IHttpMiddleware<T = any> {
    handle: (httpRequest: T) => Promise<HttpResponse>
}
