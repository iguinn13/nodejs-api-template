import jwt from 'jsonwebtoken';

import { ENV } from '@/config/env';
import { IAccessTokenCryptographyService } from '@/application/interfaces/services/cryptographies/access-token';

export class JWTAdapter implements IAccessTokenCryptographyService {
    public sign(input: { data: any; ttl?: number; }): string {
        return jwt.sign(
            input.data, 
            ENV.JWT_SECRET, 
            {
                expiresIn: input.ttl
            }
        );
    }
}
