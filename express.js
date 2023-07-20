// Express JS is framework of NodeJS
// npm install express
// Reduces workload of developers.
const data = require('./data')
const express = require('express');
const app = express();
const PORT = 4500;


app.get('/', (req, res)=>{
    res.send(`
    <h1>your name is<br> ${req.query.name}</h1>
    <p>Some paragraph</p>
    <button><a href='/about'>Goto About Page</a></button>
    `);
})
app.get('/about', (request, response)=>{
    response.send(data)
})
app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
});

