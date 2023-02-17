const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000
const axios = require("axios");

console.log('Starting up!')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req,res) =>  {
   axios.get("https://jsonplaceholder.typicode.com/todos")

   .then(response => {
            res.json(response.data);
   })
   .catch(err =>  {
       console.error(err)

       res.sendStatus(500)
   })
   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
