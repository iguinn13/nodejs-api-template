export interface IAuthenticateUserUseCase {
    execute(input: IAuthenticateUserUseCase.Input): Promise<IAuthenticateUserUseCase.Output>;
}

export namespace IAuthenticateUserUseCase {
    export type Input = {
        email: string;
        password: string;
    }

    export type Output = {
        token: string;
    }

    export enum Exceptions {
        USER_NOT_FOUND = 'Email or password is invalid',
    }
}
