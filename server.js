const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
'mongodb://punisher973:punisher973@cluster0-shard-00-00.en3af.mongodb.net:27017,cluster0-shard-00-01.en3af.mongodb.net:27017,cluster0-shard-00-02.en3af.mongodb.net:27017/fit_db?ssl=true&replicaSet=atlas-xg308k-shard-0&authSource=admin&retryWrites=true&w=majority');


require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});