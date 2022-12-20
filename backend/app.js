import express from "express";
import cors from "cors";
import { api } from "./services/api";

const app = express();

app.use(cors());
app.use(express.json());

// get random cats images
app.get("/random", (request, response) => {
  api.get("images/search?limit=20").then((res) => {
    const content = res.data;
    response.status(200).json(content);
  });
});

// get all cats breeds
app.get("/breeds", (request, reponse) => {
  api.get("breeds").then((res) => {
    const content = res.data;
    console.log("res");
    reponse.status(200).json(content);
  });
});

// get image by breed id
app.post("/breed", (request, reponse) => {
  let id = request.body.id;
  let all = request.body.all;
  api.get(`images/search?breed_ids=${id}`).then((res) => {
    let content = res.data[0];
    reponse.status(200).json(content);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
