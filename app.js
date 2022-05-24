(async () => {
  await require("./database");
})();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');

const moviesRouter = require("./routes/peliculas");
const usersRouter = require("./routes/users");
const listaRouter = require("./routes/listas");

const docu = require("./documentation/documentation.json");

const app = express();

let corsOptions = {
  origin: function (origin, callback) {
    db.loadOrigins(function (error, origins) {
      callback(error, origins)
    })
  }
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/peliculas", cors(corsOptions), moviesRouter);
app.use("/usuarios", cors(corsOptions),usersRouter);
app.use("/listas", cors(corsOptions), listaRouter);

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
});

let port = process.env.PORT || '8000';

app.get('/', function (req, res) {
  res.json(docu);
});

app.listen(port, function () {
console.log('App listening on port 8000!');
});

app.set('port', port);

module.exports = app;
