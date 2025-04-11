import bcrypt from 'bcrypt';

import { IHashCryptographyService } from '@/application/interfaces/services/cryptographies/hash';

export class BcryptAdapter implements IHashCryptographyService {
    public encrypt(input: { data: string; }): Promise<string> {
        return bcrypt.hash(input.data, 10);
    }

    public compare(input: { data: string; hashedData: string; }): Promise<boolean> {
        return bcrypt.compare(input.data, input.hashedData);
    }
}
