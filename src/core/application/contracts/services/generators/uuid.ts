export interface IUUIDGenerator {
    generate(): IUUIDGenerator.Output;
}

export namespace IUUIDGenerator {
    export type Output = string;
}
