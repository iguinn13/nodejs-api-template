export interface ICreateUserUseCase {
    execute(input: ICreateUserUseCase.Input): Promise<ICreateUserUseCase.Output>;
}

export namespace ICreateUserUseCase {
    export type Input = {
        name: string;
        email: string;
        password: string;
    }

    export type Output = {
        id: string;
    }

    export enum Exceptions {
        EMAIL_CONFLICT = 'Provided email is already registered'
    }
}
