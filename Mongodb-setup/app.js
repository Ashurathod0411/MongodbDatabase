const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect( process.env.DB_HOST_CONNECTION_URL,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    },
    function (err) {
    if (err) {
        console.log("error occurred", err);
    } else {
        console.log("Connection to database successfully");
    }
});
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentDetailsRouter = require("./routes/studentDetails");
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/studentDetails", studentDetailsRouter);

module.exports = app;
