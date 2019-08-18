import DDDCode from '../models/DDDCode'

exports.create = (req, res) => {
  DDDCode.create({
    ddd_code: req.body.ddd_code,
  }).then(ddd => {
    res.json({ddd})
  })
}
