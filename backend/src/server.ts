import express from "express";
import cors from "cors";
import { routes } from "./routes/routes";

const app = express();

const port = 3333;

app.use(cors({ origin: true }));

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
