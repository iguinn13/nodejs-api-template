import crypto from 'node:crypto';

import { IUUIDGenerator } from '@/core/application/contracts/services/generators/uuid';

export class CryptoUUIDGenerator implements IUUIDGenerator {
    public generate(): IUUIDGenerator.Output {
        return crypto.randomUUID();
    }
}
