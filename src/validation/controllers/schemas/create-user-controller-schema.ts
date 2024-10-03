import zod from 'zod';

export const createUserControllerSchema = zod.object({
    name: zod.string({ message: 'Name is necessary' }),
    email: zod.string().email({ message: 'Email must be provided' }),
    password: zod.string({ message: 'Password must be provided' }),
});
