const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();
const app = express();
dotenv.config();

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb connection done !");
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });

app.get("/", (req, res) => {
  res.send(
    "Welcome to Backend my friend\nYour Roller Coaster starts from now on\nFasten your codeways so you can catchup of what is been taught"
  );
});
app.get("/static", (req, res) => {
  console.log(__dirname);
  /res.json({"hello":"hello"})/
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/signup',(req,res)=>{
    var{firstName,lastName,username,email,password}=req.body;
    console.log(req.body)
    console.log(firstName,lastName,username,email,password);
    res.json("value received")
})

app.listen(3001, () => {
  console.log("Server started");
});
