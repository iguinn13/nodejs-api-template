export interface IHashEncrypter {
    encrypt(data: any): Promise<string>;
}
