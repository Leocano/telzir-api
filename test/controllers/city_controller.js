import assert, { fail } from 'assert'
import axios from 'axios'

const port = process.env.port || 8000

describe('City controller', function() {
  this.timeout(5000)

  it('creates city', function(done) {
    axios.post(`localhost:${port}/cities`, {
      ddd_code: 666,
      name: 'Mauá City'
    })
    .then(res => {
      assert.equal(res.data.ddd_code, 666)
    })
    .catch(err => {
      fail(err)
    })
    .finally(() => {
      done()
    })
  })
})
