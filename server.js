const express = require('express');
const dotenv = require('dotenv');
const path = require("path");


const connectDB = require('./config/config');
require('colors');
const morgan = require('morgan');
const { resolve } = require('path');



//congig dotenv

dotenv.config()

//connection mongodb
connectDB()


const app = express();

//middeleware 
app.use(express.json());

app.use(morgan("dev"));

//route
app.use("/api/pizzas", require("./routers/pizzaRoute"));
app.use("/api/users", require("./routers/userRoute"));
app.use("/api/orders", require("./routers/orderRoute"));

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '/client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path, resolve(__dirname, "client", "build", "index.html"))
    })
} else {
    app.get("/", (req, res) => {

        res.send("<h1>Hello from Node server vai nodemon</h1>");

    });
}


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server running On ${process.env.NODE_ENV} mode on port number ${process.env.PORT}`.bgMagenta.white);

});

