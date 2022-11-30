const express = require("express");
const cors = require("cors");
const app=express();
const PORT= process.env.PORT || 3000;
const torrents = require("./Torrents");
app.get("/:query",torrents.torrents);
app.listen(PORT, function () {
      console.log(`Example app listening on port ${PORT}!`);
      });