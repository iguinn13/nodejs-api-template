export class EmailAlreadyRegisteredException extends Error {
    public constructor() {
        super('Email already registered');
    }
}
