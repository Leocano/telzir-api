import City from '../models/City'

exports.create = (req, res) => {
  City.create({
    ddd_code: req.body.ddd_code,
    name: req.body.name
  }).then(city => {
    res.json({city})
  })
}
