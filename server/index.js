import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/notifications", (req, res) => {
  res.json({
    network: 3,
    jobs: 6,
    messaging: 1,
    notifications: 0,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
