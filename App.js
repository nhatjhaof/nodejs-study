const express = require('express');
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/hao", (req, res) => {
    res.send("Hello Hao")
})

app.listen(port, () => {
    console.log(`My app is running on port : ${port}`)
})