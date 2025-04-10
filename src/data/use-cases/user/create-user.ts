import { User } from '@/domain/entities/user';
import { ICreateUserUseCase } from '@/domain/use-cases/user/create-user';

import { IHashEncrypter } from '@/data/contracts/cryptographies/hash/encrypter';
import { ICreateUserRepository } from '@/data/contracts/repositories/user/create-user';
import { IFindUserByEmailRepository } from '@/data/contracts/repositories/user/find-user-by-email';

export class CreateUserUseCase implements ICreateUserUseCase {
    public constructor(
        private readonly hashEncrypter: IHashEncrypter,
        private readonly createUserRepository: ICreateUserRepository,
        private readonly findUserByEmailRepository: IFindUserByEmailRepository,
    ) { }

    public async execute(input: ICreateUserUseCase.Input): Promise<ICreateUserUseCase.Output> {
        const userWithTheSameEmail = await this.findUserByEmailRepository.findByEmail(input.email);
        if (userWithTheSameEmail) throw new Error(ICreateUserUseCase.Exceptions.EMAIL_CONFLICT);

        const hashedPassword = await this.hashEncrypter.encrypt(input.password);

        const user = User.make({
            name: input.name,
            email: input.email,
            password: hashedPassword,
        });

        await this.createUserRepository.create(user);

        return { id: user.id };
    }
}
