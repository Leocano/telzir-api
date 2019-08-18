import Sequelize from 'sequelize'
import conn from '../db/conn'

const City = conn.define('city', {
  ddd_code: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
City.sync()

export default City
