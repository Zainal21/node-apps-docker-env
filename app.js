require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.APP_PORT || 3005;
const { animals } = require("./mongo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({
    result: null,
    success: true,
    message: "Your Application is Running",
  });
});

app.get("/animals", async (req, res) => {
  try {
    const kitten = await animals.find({});
    res.status(200).send({
      result: kitten,
      success: true,
      message: "Data retrieve successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/animals", (req, res) => {
  const payload = req.body;
  const kitten = new animals(payload);
  kitten.save().then(() => {
    res.status(200).send({
      success: true,
      message: "Data added successfully",
    });
  });
});

app.listen(port, () => console.log(`This app run on ${port}`));
