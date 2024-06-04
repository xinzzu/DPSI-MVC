var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//router

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoriesRouter = require('./routes/categoryRoutes');
var customerRouter = require('./routes/customerRoutes');
var employeeRouter = require('./routes/employeeRoutes');
var orderDetailRouter = require('./routes/orderDetailRoutes');
var orderRouter = require('./routes/orderRoutes')
var productRouter = require('./routes/productRoutes');
var shipperRouter = require('./routes/shipperRoutes');
var supplierRouter = require('./routes/supplierRoutes'); 



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/categories',categoriesRouter);
app.use('/customers',customerRouter);
app.use('/employees',employeeRouter);
app.use('/order-detail',orderDetailRouter);
app.use('/order',orderRouter);
app.use('/product',productRouter);
app.use('/shiper',shipperRouter);
app.use('/supplier',supplierRouter);
app.use('/users', usersRouter);
app.use('/cateogories',categoriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //line define the title
  res.locals.title = 'Error';

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
