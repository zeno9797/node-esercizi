import express from "express"
import { getAll, getOneById, create, deleteById, updateById, createImage } from "./controllers.mjs";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
})

const upload = multer({storage})

const app = express();
const port = 3000;

app.use("/uploads", express.static("uploads"))
app.use("/static", express.static("static"))

app.use(express.json());

app.get("/planets", getAll )

app.get("/planets/:id", getOneById )

app.post("/planets", create )

app.delete("/planets/:id", deleteById)

app.put("/planets/:id", updateById)

app.post("/planets/:id/image", upload.single("image"), createImage)

app.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
  });