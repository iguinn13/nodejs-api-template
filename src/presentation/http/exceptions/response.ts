import { HttpResponse } from '../contracts/response';

export class HttpResponseException extends Error {
    public constructor(public readonly response: HttpResponse) {
        super(response.body.error);
    }
}
