const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// append /api for our http requests
app.use("/api", router);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
