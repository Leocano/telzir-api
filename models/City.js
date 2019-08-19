import Sequelize from 'sequelize'
import conn from '../db/conn'
import DDDCode from './DDDCode'

const City = conn.define('city', {
  ddd_code: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: DDDCode,
      key: 'ddd_code'
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
City.sync()

export default City
