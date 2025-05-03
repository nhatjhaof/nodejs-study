import express from "express";
// require('dotenv').config()
import 'dotenv/config'
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello world nodemon")
})

app.get("/hao", (req, res) => {
    res.send("Hello Hao")
})

app.listen(port, () => {
    console.log(`My app is running on port : ${port}`)
    console.log(`My port : ${process.env.port}`)
})