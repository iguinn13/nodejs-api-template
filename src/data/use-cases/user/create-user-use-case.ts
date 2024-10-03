import { randomUUID } from 'crypto';

import { User } from '../../../domain/entities/user';
import { ICreateUserUseCase } from '../../../domain/use-cases/user/create-user-use-case';

import { IUserRepository } from '../../protocols/repositories/user-repository';
import { IHashCryptographyService } from '../../protocols/cryptographies/hash-cryptography-service';

export class CreateUserUseCase implements ICreateUserUseCase {
    public constructor(
        private readonly userRepository: IUserRepository,
        private readonly hashCryptographyService: IHashCryptographyService,
    ) { }

    public async execute(input: ICreateUserUseCase.Input): Promise<ICreateUserUseCase.Output> {
        const userWithTheSameEmail = await this.userRepository.findByEmail(input.email);
        if (userWithTheSameEmail) throw new Error(ICreateUserUseCase.Exceptions.EMAIL_CONFLICT);

        const id = randomUUID();
        const hashedPassword = await this.hashCryptographyService.encrypt(input.password);

        const user = new User({
            id,
            name: input.name,
            email: input.email,
            password: hashedPassword,
        });

        await this.userRepository.create(user);

        return { id };
    }
}
