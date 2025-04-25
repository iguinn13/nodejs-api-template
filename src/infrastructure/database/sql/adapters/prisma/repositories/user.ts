import { PrismaSqlDatabaseClient } from '../client';
import { ISqlDatabaseClient } from '../../../contracts/client';

import { ICreateUserRepository } from '@/core/application/contracts/repositories/user/create';
import { IGetUserByEmailRepository } from '@/core/application/contracts/repositories/user/get-by-email';

export class PrismaUserRepository implements ICreateUserRepository, IGetUserByEmailRepository {
    private readonly prismaClient: ISqlDatabaseClient;

    public constructor() {
        this.prismaClient = PrismaSqlDatabaseClient.getInstance().getClient();
    }

    public async create(input: ICreateUserRepository.Input): Promise<ICreateUserRepository.Output> {
        await this.prismaClient.user.create({
            data: input.user
        });
    }

    public async getByEmail(input: IGetUserByEmailRepository.Input): Promise<IGetUserByEmailRepository.Output> {
        const user = await this.prismaClient.user.findUnique({
            where: {
                email: input.email
            }
        });

        return user ?? null;
    }
}
