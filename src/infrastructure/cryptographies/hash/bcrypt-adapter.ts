import bcrypt from 'bcrypt';

import { IHashEncrypter } from '../../../data/contracts/cryptographies/hash/encrypter';
import { IHashComparator } from '../../../data/contracts/cryptographies/hash/comparator';

export class BcryptAdapter implements IHashEncrypter, IHashComparator {
    public async encrypt(data: any): Promise<string> {
        return bcrypt.hash(data, 12);
    }

    public async compare(params: IHashComparator.Params): IHashComparator.Result {
        return bcrypt.compare(params.data, params.hashedData);
    }
}
