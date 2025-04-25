import z from 'zod';

export const createUserSchema = z.object({
    name: z.string({ message: 'Name is required' }),
    email: z.string({ message: 'Email is required' }).email({ message: 'Invalid email' }),
});
