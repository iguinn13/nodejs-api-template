import { HttpRequest } from './request';
import { HttpResponse } from './response';

export interface IHttpMiddleware {
    handle(request: HttpRequest): Promise<HttpResponse | void>;
}
