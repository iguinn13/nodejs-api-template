import { IUUIDGenerator } from '../../contracts/services/generators/uuid';
import { ICreateUserRepository } from '../../contracts/repositories/user/create';
import { IGetUserByEmailRepository } from '../../contracts/repositories/user/get-by-email';

import { User } from '@/core/domain/entities/user';
import { ICreateUserUseCase } from '@/core/domain/use-cases/user/create';
import { EmailAlreadyRegisteredException } from '@/core/domain/exceptions/user/email-already-registered';

export class CreateUserUseCase implements ICreateUserUseCase {
    public constructor(
        private readonly uuidGenerator: IUUIDGenerator,
        private readonly createUserRepository: ICreateUserRepository,
        private readonly getUserByEmailRepository: IGetUserByEmailRepository
    ) {}

    public async execute(input: ICreateUserUseCase.Input): Promise<ICreateUserUseCase.Output> {
        const emailAlreadyRegistered = await this.getUserByEmailRepository.getByEmail({
            email: input.email,
        });

        if (emailAlreadyRegistered) {
            throw new EmailAlreadyRegisteredException();
        }

        const userId = this.uuidGenerator.generate();

        const user = User.make({
            name: input.name,
            email: input.email,
            userId,
        });

        await this.createUserRepository.create({
            user
        });
    }
}
