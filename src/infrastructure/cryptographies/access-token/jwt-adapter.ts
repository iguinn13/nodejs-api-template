import jwt from 'jsonwebtoken';

import { ENV } from '../../../config/env';
import { ISignAccessToken } from '../../../data/contracts/cryptographies/access-token/sign';

export class JWTAdapter implements ISignAccessToken {
    public sign(data: any): string {
        return jwt.sign(data, ENV.JWT_SECRET);
    }
}
