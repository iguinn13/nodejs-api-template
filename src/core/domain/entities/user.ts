type UserConstructorProps = {
    name: string;
    email: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date | null;
}

type UserFactoryProps = Omit<UserConstructorProps, 'createdAt' | 'updatedAt'> & {
    createdAt?: Date;
    updatedAt?: Date;
}

export class User {
    public name: string;
    public updatedAt: Date | null;

    public readonly email: string;
    public readonly userId: string;
    public readonly createdAt: Date;

    private constructor(props: UserConstructorProps) {
        this.name = props.name;
        this.email = props.email;
        this.userId = props.userId;
        this.updatedAt = props.updatedAt;
        this.createdAt = props.createdAt;
    }

    public static make(props: UserFactoryProps): User {
        return new User({
            ...props,
            updatedAt: props.updatedAt ?? null,
            createdAt: props.createdAt ?? new Date(),
        });
    }
}
