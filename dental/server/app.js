const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { join, dirname } = require("path");
const authRoutes  = require("./routes/authRoute");
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();
// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use('/api/blogs', blogRoutes);


app.get("/", (req, res, next) => {
  if (req.url.startsWith('/api')) {
    return next();
  }

});

const PORT = process.env.PORT || 3000;

// run listen
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});













// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const { authRoutes } = require("./router/auth.js");
// const path = require('path');
// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use(express.static(path.join(__dirname, "build")));
// app.use("/api/auth", authRoutes);

// const port = process.env.PORT || 5000;

// app.get("*", (req, res) => {
//     console.log("hello backend");
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// app.listen(port, () => {
//     console.log(`Server Run on Port ${port}`);
// });
