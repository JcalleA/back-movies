const express = require("express");
const cors = require("cors");
const app=express();
const torrents = require("./Torrents");

const PORT= process.env.PORT || 4000;


app.use(cors());

app.get("/:query/:category", torrents.torrents);
app.listen(PORT, function () {
      console.log(`Example app listening on port ${PORT}!`);
      });