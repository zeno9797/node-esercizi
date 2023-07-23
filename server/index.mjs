import express from "express"
import { getAll } from "./controllers.mjs";


const app = express();

app.get("/planets", getAll )

app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });