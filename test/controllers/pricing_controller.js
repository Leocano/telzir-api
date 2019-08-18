// import assert, { fail } from 'assert'
// import axios from 'axios'
// import app from '../../app'

// const port = process.env.port || 8000

// describe('Pricing controller', function() {
//   before(function(done) {
//     this.server = app.listen(port, function() {
//       console.log('test server running on port ' + port)
//       done()
//     })
//   })

//   it('creates pricing', function() {
//     return axios.post(`http://localhost:${port}/cities`, {
//       ddd_code: 666,
//       name: 'Mauá City'
//     })
//     .then(res => {
//       assert.equal(res.status, 200)
//       assert.equal(res.data.city.ddd_code, 666)
//       assert.equal(res.data.city.name, 'Mauá City')
//     })
//     .catch(err => {
//       fail(err)
//     })
//   })

//   after(function() {
//     this.server.close()
//   })
// })
