import express from "express";
import cors from "cors";

const app = express();
const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Todo 2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Todo 3",
    description: "Description 3",
  },
  {
    id: 4,
    title: "Todo 4",
    description: "Description 4",
  },
];

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

app.get("/todos/:todoId", (req, res) => {
  const { todoId } = req.params;
  res.json(todos[todoId - 1]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
