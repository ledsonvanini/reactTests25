const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World! Blau");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
