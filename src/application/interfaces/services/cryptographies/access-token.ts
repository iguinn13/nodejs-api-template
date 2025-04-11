export interface IAccessTokenCryptographyService {
    sign(input: { data: any, ttl?: number }): string;
}
