
import express from "express";
import CookeParser from "cookie-parser";
import "dotenv/config";


import authRoute from "./routes/auth.route.js"

const app = express();
app.use(express.json())
app.use(CookeParser())

app.use("/api/auth/", authRoute);

app.listen(8800, () => {
  console.log("Server is running on http://localhost:8800");
});
 
    // "dev": "nodemon --env-file .env --watch app.js "
