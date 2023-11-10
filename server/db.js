import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.dbname, process.env.dbuser, process.env.dbpassword, {
  host: 'localhost',
  dialect: 'mysq'
});

export default sequelize