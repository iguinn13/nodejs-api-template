type UserConstructorProps = {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
}

export class User {
    public name: string;
    public password: string;
    public updated_at?: Date;

    public readonly id: string;
    public readonly email: string;
    public readonly created_at: Date;

    public constructor(props: UserConstructorProps) {
        this.id = props.id;
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.updated_at = props.updated_at;
        this.created_at = props.created_at ?? new Date();
    }
}
