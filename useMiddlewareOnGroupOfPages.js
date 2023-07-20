const express = require('express')
const reqFilter = require('./middleware')
const route = express.Router(); // To apply middleware on group of pages.
const app = express();
const PORT = 4500;

//Route level Middleware.


// to use on all pages.
// app.use(reqFilter);

route.use(reqFilter); // Apply filter/middleware on group of pages.

app.get('/', (req, res)=>{
    res.send(`Welcome to Home Page`);
})
//Applying Middleware in single page.
app.get('/users', reqFilter, (req, res)=>{
    res.send(`Welcome to Users page`)
})

// Middleware will be applied on route. pages..!
route.get('/about', (req, res)=>{
    res.send(`Welcome to About page`)
})
route.get('/Contact', (req, res)=>{
    res.send(`Welcome to Contact page`)
})
app.use('/', route);


app.listen(PORT);
