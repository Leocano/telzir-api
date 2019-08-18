// import express from 'express'
// import router from './routes/router'
import app from './app'

const port = process.env.port || 8000

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use('/', router)

app.listen(port, () => {
  console.log('Server running on port ' + port)
})
