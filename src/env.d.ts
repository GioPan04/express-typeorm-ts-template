declare namespace NodeJS {
    export interface ProcessEnv {
        // Database config
        DB_HOST: string;
        DB_PORT: number;
        DB_USER: string;
        DB_PASS: string;
        DB_NAME: string;

        URL: string;

        JWT_PRIVATE: string;
    }
}