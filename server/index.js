const express = require("express")
const cors = require("cors");
const app = express();
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const routes = require("./api/routes/index")
// dotenv configuration
dotenv.config();


// app.use(morgan("dev"));


//database connection
require("./db_connection");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
        credentials: true,
    })
);


//Middleware End

//Route

app.use(routes);

// app.get('/', function (req, res) {
//     res.send('Hello, World!');
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server Is Connected to Port " + PORT);
})