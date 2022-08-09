const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Success",
    success: true,
  });
});

app.listen(3000, () => {
  console.log("server running in port 3000");
});
