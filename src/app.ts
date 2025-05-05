import express from "express";
// require('dotenv').config()
import 'dotenv/config';
import webRoutes from "./routes/web";
const app = express();
const port = 8080;
//config web routes
webRoutes(app)
//config web static
app.use(express.static('public'));
//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(port, () => {
    console.log(`My app is running on port : ${port}`);
    console.log(__dirname + '/views')
})