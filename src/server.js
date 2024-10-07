const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const home = require('./routes/home')
const sobre = require('./routes/sobre')
const notFound = require('./routes/notFound')

// middleware for statics
app.use(express.static("public"))
// app.use(express.static("routes"))

app.use(home)
app.use(sobre)
app.use(notFound)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
