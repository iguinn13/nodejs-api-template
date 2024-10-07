export interface ISqlDatabaseConnection<T = any> {
    getClient(): T;
    connect(): Promise<void>;
}
