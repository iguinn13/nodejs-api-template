export interface ICreateUserUseCase {
    execute(input: ICreateUserUseCase.Input): Promise<ICreateUserUseCase.Output>
}

export namespace ICreateUserUseCase {
    export type Input = {
        name: string;
        email: string;
    }

    export type Output = void;
}
