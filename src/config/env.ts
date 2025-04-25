export const ENV = {
    NODE_ENV: process.env.NODE_ENV ?? 'development',

    HTTP_SERVER_PORT: Number(process.env.HTTP_SERVER_PORT ?? 3001),

    SQL_DATABASE_PORT: process.env.SQL_DATABASE_PORT ?? 5432,
    SQL_DATABASE_HOST: process.env.SQL_DATABASE_HOST ?? 'localhost',
    SQL_DATABASE_NAME: process.env.SQL_DATABASE_NAME ?? 'template',
    SQL_DATABASE_USER: process.env.SQL_DATABASE_USER ?? 'root',
    SQL_DATABASE_DIALECT: process.env.SQL_DATABASE_DIALECT ?? 'pg',
    SQL_DATABASE_PASSWORD: process.env.SQL_DATABASE_PASSWORD ?? 'root',

    JWT_SECRET: process.env.JWT_SECRET ?? 'template'
};
