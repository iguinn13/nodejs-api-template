import { HttpRequest } from './request';
import { HttpResponse } from './response';

export interface IHttpController {
    handle(request: HttpRequest): Promise<HttpResponse>;
}
