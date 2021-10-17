const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
const path = require('path');
const app = express();

const routerIndex = require('./router/index.routes');

//setings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'ANGEL',
    port: 3306,
    database: 'mtsport'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//routes

app.use(routerIndex);

//public 
app.use( express.static( "public" ) );


//listen
app.listen(app.get('port'), ()=> {
    console.log('server on port 3000')
})
