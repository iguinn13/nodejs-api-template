export interface IHttpServer {
    listen(input: IHttpServer.Listen.Input): IHttpServer.Listen.Output;
}

export namespace IHttpServer {
    export namespace Listen {
        export type Input = {
            port: number;
        }

        export type Output = void;
    }
}
