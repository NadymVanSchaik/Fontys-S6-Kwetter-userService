const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const mongoose = require('mongoose')
require('dotenv/config')

const config = {
    name: 'user-service',
    port: 3000,
    host: '0.0.0.0',
};

const app = express();
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//Import
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);


//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
})

mongoose.connect(process.env.DB_CONNECTION) 
.then(() =>{
    console.log("connected to DB");
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    logger.info(`${config.name} running on ${config.host}:${config.port}`);
});

var amqp = require('amqplib/callback_api');
const CONN_URL = process.env.MQ_CONNECTION;


const updateKweetCounter = require('./functions/updateKweetCounter');
amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, ch) {
        ch.consume('update-kweet-counter', function (msg) {
            ch.ack(msg)
            updateKweetCounter(msg.content.toString())
      },{ noAck: false }
    );
    });
});