import zod from 'zod';

export const createUserControllerSchema = zod.object({
    name: zod.string({ message: 'Name is necessary' }),
    password: zod.string({ message: 'Password is necessary' }),
    email: zod.string().email({ message: 'Provided email is invalid' }),
});
