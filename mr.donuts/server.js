//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina -  Programação Web 
//Dev:  Luana Teixeira de Moraes 
//Data: 12/05/23

const express = require('express')
const app = express()
const port = 8080

app.use(express.json()) //Importa o módulo 'express' e cria uma instância do aplicativo Express. Define a variável 'port' para armazenar o número da porta que o servidor irá escutar (porta 8080).//

//Define o middleware 'express.json()', que permite que o servidor entenda os dados JSON enviados pelos clientes.//
const donuts = [ 
  { id: 1, flavor: 'Chocolate' },
  { id: 2, flavor: 'Strawberry' },
]

//Cria uma array 'donuts' com dois objetos que representam sabores de rosquinhas.//
app.get('/', (req, res) => {
  res.redirect('/donuts') //
}) 
javascript

//Define uma rota para a página inicial ('/'), que redireciona para a rota '/donuts'.
app.get('/donuts', (req, res) => {
  res.json(donuts)
})

//Define uma rota para '/donuts', que retorna um objeto JSON contendo as informações das rosquinhas presentes na array 'donuts'.
app.get('/donuts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const donut = donuts.find(donut => donut.id === id)
  if (!donut) {
    return res.status(404).json({ error: 'Donut not found' })
  }
  res.json(donut)
})

//Define uma rota para '/donuts/:id', que recebe o ID da rosquinha como um parâmetro e retorna o objeto JSON correspondente a essa rosquinha. Se a rosquinha não existir, um erro 404 é retornado.
app.post('/donuts', (req, res) => {
  const donut = req.body
  donuts.push(donut)
  res.json({ inputs: donut })
})

//Define uma rota para criar uma nova rosquinha, adicionando-a à array 'donuts'. A nova rosquinha é recebida como um objeto JSON no corpo da solicitação. O servidor retorna um objeto JSON contendo a nova rosquinha adicionada.
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

//Define uma rota para atualizar as informações de uma rosquinha existente. A rosquinha a ser atualizada é especificada pelo ID. A nova informação da rosquinha é recebida como um objeto JSON no corpo da solicitação. O servidor retorna um objeto JSON contendo a rosquinha atualizada.
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

