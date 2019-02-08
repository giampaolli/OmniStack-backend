const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    'mongodb://goweek:goweek123@ds127015.mlab.com:27015/goweekbackend-giampaoli',
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;
    
    return next();
})

app.use(express.json())
app.use(require('./routes'));

app.listen(3000, ()=> {
    console.log('server started on port 3000');
});