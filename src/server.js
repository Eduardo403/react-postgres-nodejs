import express, { json } from "express";
import morgan from "morgan";
import taks from "./routes/taks.routes.js";
const app = express();
app.use(json());
app.use(morgan("dev"));
app.use(taks);
app.use((err, req, res, next) => {
  res.status(400).json(err.message);
});
app.listen(4000);
console.log(`server lisent on port 4000`);
