import assert from 'assert'
import DDDCode from '../../models/DDDCode'

describe('DDDCode model', function () {
  before(function() {
    return DDDCode.sync({force: true})
  })

  it('creates ddd code', function() {
    return DDDCode.create({
      ddd_code: 300
    })
    .then(code => {
      assert.equal(code.ddd_code, 300)
    })
  })

  after(function() {
    return DDDCode.sync({force: true})
  })
})
