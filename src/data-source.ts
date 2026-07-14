import {DataSource} from "typeorm";

const AppDataSource = new DataSource({
    type: 'postgres',
    url: 'postgresql://postgres:123@database:5432/uzchess_n8',
    synchronize: false,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js']
});

export default AppDataSource;