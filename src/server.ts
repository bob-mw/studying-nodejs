import express from 'express';
import './database';

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello World"});
});

app.post("/", (req, res) => {
  return res.json({ message: "User Resgistered" });
});

app.listen(3333, () => console.log('server running in port 3333'));
