import assert from 'assert'
import City from '../../models/City'

describe('City model', function () {
  it('creates city', function(done) {
    City.create({
      ddd_code: 666,
      name: 'Mauá City'
    })
    .then(city => {
      assert.equal(city.ddd_code, 666)
    })
    .finally(() => {
      done()
    })
  })

  after(function(done) {
    City.destroy({
      where: {
        ddd_code: 666
      }
    })
    .finally(() => {
      done()
    })
  })
})
