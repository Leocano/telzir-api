import assert from 'assert'
import City from '../../models/City'

describe('City model', () => {
  it('creates city', () => {
    City.create({
      ddd_code: 666,
      name: 'Mauá City'
    }).then(city => {
      assert.equal(city.ddd_code, 666)
    })
  })

  after(done => {
    City.destroy({
      where: {
        ddd_code: 666
      }
    }).then(() => {
      done()
    })
  })
})
