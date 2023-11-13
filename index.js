let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

const BlogRoute = require("./Routes/blog.routes.js");

  mongoose
  .connect("mongodb+srv://eddie05:westmec@first-cluster.sazscse.mongodb.net/Blog")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`,
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });


  const app = express();
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(cors());
  app.use("/blogs", blogRoute);

  const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use((req, res, next) => {
    next(createError(404));
  });
  
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
