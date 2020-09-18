const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/', (request, response) => {
  return response.status(200).render('index')
})

app.get('/contact', (request, response) => {
  return response.status(200).render('index')
})

app.get('/reviews', (request, response) => {
  return response.status(200).render('index')
})

app.all('*', (request, response) => {
  return response.status(404).send('Sorry, your page was not found')
})

app.listen(1337, () => {
  console.log('Listening on 1337...')// eslint-disable-line no-console
})





