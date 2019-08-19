import Sequelize from 'sequelize'

const conn = new Sequelize({
  dialect: 'sqlite',
  storage: `db/${process.env.DB_NAME}`
})

export default conn
