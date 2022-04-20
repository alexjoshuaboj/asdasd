(async ()=>{
  await require('./database');
})()

let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let moviesRouter = require('./routes/peliculas');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/movies', moviesRouter);


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
