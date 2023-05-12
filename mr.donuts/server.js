const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

const donuts = [
  { id: 1, flavor: 'Chocolate' },
  { id: 2, flavor: 'Strawberry' },
]

app.get('/', (req, res) => {
  res.redirect('/donuts')
})

app.get('/donuts', (req, res) => {
  res.json(donuts)
})

app.get('/donuts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const donut = donuts.find(donut => donut.id === id)
  if (!donut) {
    return res.status(404).json({ error: 'Donut not found' })
  }
  res.json(donut)
})

app.post('/donuts', (req, res) => {
  const donut = req.body
  donuts.push(donut)
  res.json({ inputs: donut })
})

app.put('/donuts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const donut = req.body
  const index = donuts.findIndex(donut => donut.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'Donut not found' })
  }
  donuts[index] = { ...donut, id }
  res.json({ inputs: donuts[index] })
})

app.delete('/donuts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = donuts.findIndex(donut => donut.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'Donut not found' })
  }
  const donut = donuts.splice(index, 1)
  res.json({ inputs: donut[0] })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

