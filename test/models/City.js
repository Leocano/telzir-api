import assert from 'assert'
import City from '../../models/City'

describe('City model', function () {
  it('creates city', function() {
    return City.create({
      ddd_code: 666,
      name: 'Mauá City'
    })
    .then(city => {
      assert.equal(city.ddd_code, 666)
      assert.equal(city.name, 'Mauá City')
    })
  })

  it('shows all created cities', function() {
    return City.findAll()
      .then(cities => {
        assert.equal(cities[0].ddd_code, 666)
        assert.equal(cities[0].name, 'Mauá City')
      })
  })

  after(function() {
    return City.destroy({
      where: {
        ddd_code: 666
      }
    })
  })
})
