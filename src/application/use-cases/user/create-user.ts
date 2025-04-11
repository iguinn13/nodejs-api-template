import { User } from '@/domain/entities/user';
import { ICreateUserUseCase } from '@/domain/use-cases/user/create-user';
import { EmailAlreadyRegisteredException } from '@/domain/exceptions/user/email-already-registered';

import { IUserRepository } from '@/application/interfaces/repositories/user';
import { IHashCryptographyService } from '@/application/interfaces/services/cryptographies/hash';
import { CreateUserUseCaseInput, CreateUserUseCaseOutput } from '@/application/dtos/user/create-user';

export class CreateUserUseCase implements ICreateUserUseCase {
    public constructor(
        private readonly userRepository: IUserRepository,
        private readonly hashCryptographyService: IHashCryptographyService,
    ) { }

    public async execute(input: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput> {
        const userWithTheSameEmail = await this.userRepository.findByEmail({ email: input.email });
        if (userWithTheSameEmail) throw new EmailAlreadyRegisteredException();

        const hashedPassword = await this.hashCryptographyService.encrypt({ data: input.password });

        const user = User.make({
            name: input.name,
            email: input.email,
            password: hashedPassword,
        });

        await this.userRepository.create({ user });

        return { id: user.id };
    }
}
