import zod from 'zod';

export const authenticateUserControllerSchema = zod.object({
    email: zod.string({ message: 'Email must be provided' }).email({ message: 'Invalid email' }),
    password: zod.string({ message: 'Password must be provided' }),
});
