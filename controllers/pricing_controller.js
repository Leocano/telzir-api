import Pricing from '../models/Pricing'

exports.create = (req, res) => {
  Pricing.create({
    origin_ddd: req.body.origin_ddd,
    destination_ddd: req.body.destination_ddd,
    price: req.body.price
  }).then(pricing => {
    res.json({pricing})
  })
}
