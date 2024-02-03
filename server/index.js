require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/errorMiddleware");
const connection = require("./database/db");
const teacherRoute = require("./routes/teacherRoute");
const userRoute = require("./routes/userRoutes");
const agoraRoute = require("./routes/agoraRoute");
const paymentRoute = require("./routes/paymentRoute");
const questionRoute=require("./routes/ratingRoute");
const serviceRoute=require('./routes/serviceRoute')
// FOR PAYMENT GATWAY
const path = require("path");
const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_j3uMC3pJNVXJpR",
  key_secret: "iVdd7vf9Qopo1TKflmLWF8Ue",
});

const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("hello!!!!");
});

app.use("/teacher", teacherRoute);
app.use("/user", userRoute);
app.use("/agora", agoraRoute);
app.use("/payment", paymentRoute);
app.use("/ask",questionRoute);
app.use("/service", serviceRoute);



app.use(errorMiddleware);

connection();

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
