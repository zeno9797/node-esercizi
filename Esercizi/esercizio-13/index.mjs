import express from "express"
import { getAll, getOneById, create, deleteById, updateById } from "./controllers.mjs";


const app = express();
const port = 3000;

app.use(express.json());

app.get("/planets", getAll )

app.get("/planets/:id", getOneById )

app.post("/planets", create )

app.delete("/planets/:id", deleteById)

app.put("/planets/:id", updateById)

app.listen(3000, () => {
  console.log(`Server listening on port ${port}`);
});