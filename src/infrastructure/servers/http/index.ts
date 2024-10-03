export interface IHttpServer {
    listen(): void;
    bootstrap(): Promise<void>;
}
