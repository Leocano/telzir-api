import assert, { fail } from 'assert'
import axios from 'axios'
import app from '../../app'

const port = process.env.port || 8000

describe('City controller', function() {
  before(function() {
    this.server = app.listen(port, function() {
      console.log('test server running on port ' + port)
      return axios.post(`http://localhost:${port}/ddd-codes`, {
        ddd_code: 666,
      })
    })
  })

  it('creates city', function() {
    return axios.post(`http://localhost:${port}/cities`, {
      ddd_code: 666,
      name: 'Mauá City'
    })
    .then(res => {
      assert.equal(res.status, 200)
      assert.equal(res.data.city.ddd_code, 666)
      assert.equal(res.data.city.name, 'Mauá City')
    })
    .catch(err => {
      fail(err)
    })
  })

  it('shows all created cities', function() {
    return axios.get(`http://localhost:${port}/cities`)
      .then(res => {
        assert.equal(res.status, 200)
        assert.equal(res.data[0].ddd_code, 666)
        assert.equal(res.data[0].name, 'Mauá City')
      })
      .catch(err => {
        fail(err)
      })
  })

  after(function() {
    this.server.close()
  })
})
