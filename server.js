const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// set up express
const app = express();
const path = require('path');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

const db = require("./config/keys").mongoURI;

// set up mongoose
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send({message: "hello" });
});
// set up routes
app.use("/users", require("./routes/users"));
app.use("/todos", require("./routes/todo"));
app.use("/waiver", require("./routes/waiver"));
app.use("/appointment", require("./routes/appointment"));
