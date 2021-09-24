const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
 

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
);


const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const verifyToken = require("./routes/validate-token");

app.use(cors());
app.use(express.json()); 
app.use("/api/user", authRoutes);
app.use("/api/dashboard", verifyToken, dashboardRoutes);

app.listen(3001, () => console.log("server is running..."));
