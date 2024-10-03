import jwt from 'jsonwebtoken';

import { ENV } from '../../config/env';
import { IAccessTokenCryptographyService } from '../../data/protocols/cryptographies/access-token-cryptography-service';

export class AccessTokenCryptographyService implements IAccessTokenCryptographyService {
    public generate(data: any): string {
        return jwt.sign(data, ENV.JWT_SECRET);
    }
}
