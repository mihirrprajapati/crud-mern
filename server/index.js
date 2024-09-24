import express from "express";
import cors from "cors";
import dbConnect from "./utils/db.js";
import routers from "./routes/UserRoutes.js";
import BillingRouters from "./routes/BillingRoutes.js";

const PORT = 3001;
const app = express();

dbConnect();
app.use(express.json());
app.use(cors());

app.use("/api", routers);
app.use("/ques2", BillingRouters);

app.listen(PORT, () => {
  console.log("server running at port " + PORT);
});
