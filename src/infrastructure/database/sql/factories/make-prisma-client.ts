import { PrismaAdapter } from '../adapters/prisma/client';

export const makePrismaClient = (): PrismaAdapter => {
    return PrismaAdapter.getInstance();
};
