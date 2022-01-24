const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

app.use(cors());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

  
app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

  
  app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));