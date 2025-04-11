export type CreateUserUseCaseInput = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type CreateUserUseCaseOutput = {
    id: string;
};
