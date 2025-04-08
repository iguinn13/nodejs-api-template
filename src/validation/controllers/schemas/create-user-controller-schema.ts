import zod from 'zod';

export const createUserControllerSchema = zod.object({
    name: zod.string({ message: 'Name must be provided' }),
    email: zod.string({ message: 'Email must be provided' }).email({ message: 'Invalid email' }),
    password: zod.string({ message: 'Password must be provided' }),
});
