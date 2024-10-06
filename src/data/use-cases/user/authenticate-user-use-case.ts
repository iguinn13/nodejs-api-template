import { IHashComparator } from '../../contracts/cryptographies/hash/comparator';
import { ISignAccessToken } from '../../contracts/cryptographies/access-token/sign';
import { IFindUserByEmailRepository } from '../../contracts/repositories/user/find-by-email';

import { IAuthenticateUserUseCase } from '../../../domain/use-cases/user/authenticate-user-use-case';

export class AuthenticateUserUseCase implements IAuthenticateUserUseCase {
    public constructor(
        private readonly hashComparator: IHashComparator,
        private readonly signAccessToken: ISignAccessToken,
        private readonly findUserByEmailRepository: IFindUserByEmailRepository,
    ) { }

    public async execute(input: IAuthenticateUserUseCase.Input): Promise<IAuthenticateUserUseCase.Output> {
        const user = await this.findUserByEmailRepository.findByEmail(input.email);
        if (!user) throw new Error(IAuthenticateUserUseCase.Exceptions.USER_NOT_FOUND);

        const passwordIsCorrect = await this.hashComparator.compare({ data: input.password, hashedData: user.password });
        if (!passwordIsCorrect) throw new Error(IAuthenticateUserUseCase.Exceptions.USER_NOT_FOUND);

        const token = this.signAccessToken.sign({ userId: user.id });

        return { token };
    }
}
