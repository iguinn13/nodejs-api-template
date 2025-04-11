export interface ISqlDatabaseClient<T = any> {
    connect(): Promise<void>;
    getClient(): T;
}
