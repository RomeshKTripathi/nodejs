const express = require('express')
const app = express();
const PORT = 4500;


//Creating MIDDLEWARE
// Application level middleware 
const reqFilter = (req, resp, next) => {
    console.log(`request Filter Called`);
    if(!req.query.age){
        resp.send(`Please provide age`)
    }
    else if(req.query.age >=18){
        next();
    }else{
        resp.send(`You can not access this page`)
    }
}

app.use(reqFilter);

app.get('/', (req, res)=>{
    res.send(`Welcome to Home Page`);
})
app.get('/users', (req, res)=>{
    res.send(`Welcome to Users page`)
})
app.listen(PORT);
