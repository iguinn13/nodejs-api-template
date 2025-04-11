export type AuthenticateUserUseCaseInput = {
    email: string;
    password: string;
}

export type AuthenticateUserUseCaseOutput = {
    token: string;
}
