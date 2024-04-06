import * as dotenv from 'dotenv';
dotenv.config();

interface KnexConfig {
    [key: string]: {
      client: string;
      connection: {
        host: string;
        user: string;
        password: string;
        database: string;
        port: number;
      };
      migrations: {
        directory: string;
      };
    };
  }

const knexConfig: KnexConfig = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'authdb',
      port: parseInt(process.env.DB_PORT as string, 10) || 5432
    },
    migrations: {
      directory: './migrations',
    },
  },
    // Additional environments (production, test, etc.) can be added here
};
  
console.log(`DB config: ${knexConfig}`)
export default knexConfig;