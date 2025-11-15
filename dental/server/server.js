const express = require("express");
const router = require("./routes/authRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const { join } = require("path");

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", router);

app.use(express.static(join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.listen(port, () => {
  console.log(`Server at http://jabalpurivfcentre.com:${port}`);
});
