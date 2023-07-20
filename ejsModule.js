// Template Engine 
const express = require('express')
const path = require('path')

const PORT = 4500
const app = express()
const publicPath = path.join(__dirname,"html")
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/profile', (req, res)=>{
    const user = {
        name:"Romesh Tripathi",
        email:"romesh@outlook.com",
        city:"Mathura",
        skills:['C++', 'Java', 'Python', 'MERN']
    }
    res.render('profile', {user});
})
app.get('/login', (req, res)=>{
    res.render('login');
})
app.listen(PORT);