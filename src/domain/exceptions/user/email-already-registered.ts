export class EmailAlreadyRegisteredException extends Error {
    public constructor() {
        super('Provided email is already registered');
    }
}
