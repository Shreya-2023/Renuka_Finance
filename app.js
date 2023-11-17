const express = require('express');
require('./db/connection')
const financeRoute = require('./routes/finance')
const app = express();
const bodyParser = require('body-parser');     //Importing the body-parser module

app.use(bodyParser.json()) //parsing JSON bodies
app.use(bodyParser.urlencoded({extended:true}))    //parsing url encoded bodies

app.use("/",financeRoute);

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/formLoad', (req,res)=>{
    res.render('finance_view')
})
app.listen(5000, ()=> {
    console.log("server is running on port 5000")
});

 