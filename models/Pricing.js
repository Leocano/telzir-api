import Sequelize from 'sequelize'
import conn from '../db/conn'
import DDDCode from './DDDCode'

const Pricing = conn.define('pricing', {
  origin_ddd: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: DDDCode,
      key: 'ddd_code'
    }
  },
  destination_ddd: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: DDDCode,
      key: 'ddd_code'
    }
  },
  price: {
    type: Sequelize.REAL,
    allowNull: false
  }
})
Pricing.sync()

export default Pricing
