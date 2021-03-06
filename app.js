var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articleRouter = require('./routes/articles')


var app = express();

const mongoose = require('mongoose');
require('dotenv').config()



// const dev_db_url = 'mongodb+srv://suebaduo:mskrab002@blog-tutorial.wocz5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// const mongoDB = process.env.MONGODB_URI || dev_db_url

// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
//   .then((result) => {
//     server.listen(port);
//     console.log('Connected to DB');
//   })
//   .catch((err) => console.log(err))

  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articleRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// app.get('/article', (req, res) =>{
//   res.render('index', {articles: "hona"})
// })





// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
