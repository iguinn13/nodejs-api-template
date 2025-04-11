export interface IHashCryptographyService {
    encrypt(input: { data: string }): Promise<string>;
    compare(input: { data: string; hashedData: string }): Promise<boolean>;
}
