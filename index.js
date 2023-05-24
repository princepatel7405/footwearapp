require("dotenv").config();
const express = require("express");
const { userRoute } = require("./routes/user.routes");
const cors = require("cors");
const { connection } = require("./db.js");
const { productRoute } = require("./routes/product.routes");
const { categoryRoute } = require("./routes/category.routes");
const app = express();


app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/login", userRoute);
app.use("/product",productRoute)
app.use("/category",categoryRoute)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database Ready!");
    console.log(`Server is running on ${process.env.PORT} PORT`);
  } catch (error) {
    console.log(error.message);
  }
});
