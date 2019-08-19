import app from './app'

const port = process.env.port || 8000

app.listen(port, () => {
  console.log('Server running on port ' + port)
})
