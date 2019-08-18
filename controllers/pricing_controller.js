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

exports.calculate = (req, res) => {
  Pricing.findOne({
    where: {
      origin_ddd: req.query.origin_ddd,
      destination_ddd: req.query.destination_ddd
    }
  }).then(pricing => {
    const price_without_discount = pricing.price * req.query.minutes
    const minutes_to_pay = req.query.minutes - req.query.offset
    const price_with_discount = Math.max(0, minutes_to_pay * pricing.price * 1.1)
    res.json({
      price_without_discount,
      price_with_discount 
    })
  })
}
