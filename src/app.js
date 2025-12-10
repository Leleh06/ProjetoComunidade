import express from "express";
import { conectaRouter } from "./router.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:3000"], // libera o frontend
    credentials: true
  }));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(conectaRouter);

app.listen(PORT, () => {
    console.log(`Rodando em http://localhost:${PORT}`);
});