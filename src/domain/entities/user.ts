import { randomUUID } from 'crypto';

type UserConstructorProps = {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    password: string;
    updatedAt?: Date;
}

type UserFactoryProps = Omit<UserConstructorProps, 'id' | 'createdAt'> & {
    id?: string;
    createdAt?: Date;
}

export class User {
    public name: string;
    public password: string;
    public updatedAt?: Date;

    public readonly id: string;
    public readonly email: string;
    public readonly createdAt: Date;

    private constructor(props: UserConstructorProps) {
        this.id = props.id;
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.updatedAt = props.updatedAt;
        this.createdAt = props.createdAt;
    }

    public static make(props: UserFactoryProps): User {
        return new User({
            ...props,
            id: randomUUID(),
            createdAt: props.createdAt ?? new Date(),
        });
    }
}
