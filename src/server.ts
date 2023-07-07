import express from "express";
import morgan from "morgan";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200);
  res.json({ message: "hello" });
});
