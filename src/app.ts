import express from "express";
// require('dotenv').config()
import 'dotenv/config';
import webRoutes from "./routes/web";
const app = express();
const port = 8080;

//config web static
app.use(express.static('public'));
//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config web routes
webRoutes(app)

app.listen(port, () => {
    console.log(`My app is running on port : ${port}`);
})