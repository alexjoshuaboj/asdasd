(async () => {
  await require("./database");
})();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const moviesRouter = require("./routes/peliculas");
const usersRouter = require("./routes/users");
const listaRouter = require("./routes/listas");

const docu = require("./documentation/documentation.json");

const app = express();


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/peliculas", moviesRouter);
app.use("/usuarios",usersRouter);
app.use("/listas", listaRouter);

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
