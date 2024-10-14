const express = require("express");
const dotenv = require("dotenv");
const { connectDb } = require("./config/db_connection");
const router = express.Router();
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use("/",routes)
dotenv.config();


const port = process.env.APP_PORT;
const startServer = async () => {

    app.listen(port,()=>{
        console.log("App is running on port ",port)
  }

)}

startServer()


