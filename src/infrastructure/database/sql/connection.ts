import knex from 'knex';

import { knexConfig } from './config';

export const sqlDatabaseConnection = knex(knexConfig);
