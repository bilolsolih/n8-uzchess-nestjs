import {DataSource} from "typeorm";

const AppDataSource = new DataSource({
    type: 'postgres',
    url: 'postgresql://postgres:123@localhost:5432/dars605',
    synchronize: false,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js']
});

export default AppDataSource;