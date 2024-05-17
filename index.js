import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import art from "./data.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use("/images", express.static("images"));

app.get("/art", (req, res) => {
  res.json(art);
});

app.get("/art/:id", (req, res) => {
  const artWork = art.find((artWork) => artWork.id === req.params.id);
  if (artWork) {
    res.json(artWork);
  } else {
    res.status(404).json({ message: "Artwork not found" });
  }
});

app.get("/art/:id/image", (req, res) => {
  const artWork = art.find((artWork) => artWork.id === req.params.id);
  if (artWork) {
    res.sendFile(path.join(__dirname, artWork.image));
  } else {
    res.status(404).json({ message: "Image not found" });
  }
});

app.listen(3000);
