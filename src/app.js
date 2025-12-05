import express from "express";
import { conectaRouter } from "./router.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(conectaRouter);

app.listen(PORT, () => {
    console.log(`Rodando em http://localhost:${PORT}`);
});