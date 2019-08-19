import assert, { fail, doesNotReject } from 'assert'
import axios from 'axios'
import DDDCode from '../../models/DDDCode'
import app from '../../app'

const port = process.env.port || 8000

describe('DDD controller', function() {
  before(function(done) {
    this.server = app.listen(port, function() {
      console.log('test server running on port ' + port)
      done()
    })
  })

  it('creates DDD code', function() {
    return axios.post(`http://localhost:${port}/ddd-codes`, {
      ddd_code: 5,
    })
    .then(res => {
      assert.equal(res.status, 200)
      assert.equal(res.data.ddd.ddd_code, 5)
    })
    .catch(err => {
      fail(err)
    })
  })

  after(function(done) {
    DDDCode.destroy({
      where: {
        ddd_code: 300
      }
    }).then(() => {
      this.server.close()
      done()
    })
  })
})
