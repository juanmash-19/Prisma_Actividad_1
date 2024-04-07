const express = require("express");
const userRouter = require("./routes/user_routes");    

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);

app.listen(3002, () => {
  console.log("Server running on port http://localhost:3002");
});