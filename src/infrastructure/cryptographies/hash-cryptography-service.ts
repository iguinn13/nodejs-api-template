import bcrypt from 'bcrypt';

import { IHashCryptographyService } from '../../data/protocols/cryptographies/hash-cryptography-service';

export class HashCryptographyService implements IHashCryptographyService {
    public async encrypt(data: any): Promise<string> {
        return bcrypt.hash(data, 12);
    }

    public async compare(data: any, encryptedData: string): Promise<boolean> {
        return bcrypt.compare(data, encryptedData);
    }
}
