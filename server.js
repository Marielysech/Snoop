const express = require("express");
const dotenv = require("dotenv");

/*-----------routes--------------*/
const usersRoute = require('./routes/users')
const authRoute = require('./routes/auth.js');

app.use("/auth", authRoute);
app.use("/users", usersRoute);



/*---------server setup------------*/

const PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.PORTNAME, (err) => {
    if (err) console.log(err);
    console.log(`Express server running on port ${port}...`);
  })
  

  module.exports = app;