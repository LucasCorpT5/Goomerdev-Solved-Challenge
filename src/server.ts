import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json())

app.use(router);

// app.listen(3000, () => {
//     console.log("Servidor rodando na porta 3000");
// });

export default app;