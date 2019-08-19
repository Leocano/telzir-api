import assert from 'assert'
import City from '../../models/City'
import DDDCode from '../../models/DDDCode'

describe('City model', function () {
  before(function() {
    return Promise.all([
      new Promise((resolve, reject) => {
        return DDDCode.create({
          ddd_code: 666
        }).then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      }),
      new Promise((resolve, reject) => {
        return City.sync({ force: true })
        .then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      }),
    ])
  })

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
    return Promise.all([
      new Promise((resolve, reject) => {
        return City.sync({ force: true })
        .then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      }),
      new Promise((resolve, reject) => {
        return DDDCode.sync({ force: true })
        .then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    ])
  })
})
