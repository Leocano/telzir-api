import Sequelize from 'sequelize'
import conn from '../db/conn'

const DDDCode = conn.define('DDDCode', {
  ddd_code: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
})
DDDCode.sync()

export default DDDCode
