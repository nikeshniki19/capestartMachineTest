const express = require("express")
const mongoose = require("mongoose");

const app = express();
const port = 8000;

//middlewares
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const adminRoutes = require("./routes/admin")


//DB connection
mongoose.connect("mongodb://localhost:27017/capestart", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("MONGODB CONNECTED");
}).catch( () =>{
    console.log("DB Error");
})


//routes
app.get("/", (req, res) => {
    return res.send("Library Management System");
});
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", adminRoutes);


//start server
app.listen(port, () => {
    console.log(`Server Running at port ${port}`)
})