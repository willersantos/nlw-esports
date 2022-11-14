import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
    // migrationsTableName: 'migration',
    type: 'sqlite',
    database: './src/common/database/database.sqlite',
    logging: true,
    synchronize: true,
    migrations: [
        './src/common/database/migration/**.ts'
    ],
    entities: [
        './src/useCases/*/models/*.ts'
    ],
    subscribers: [],
});