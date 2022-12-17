import http from "http";
import url from "url";
import { api } from "./services/api";

const main = http.createServer((request, response) => {
  // get random cats

  if (request.url === "/random") {
    console.log(response, "amineeeee");
    api
      .get("images/search?limit=20")
      .then((r) => {
        const content = r.data;
        response.setHeader("Content-Type", "application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Request-Method", "*");
        response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
        response.setHeader("Access-Control-Allow-Headers", "*");
        response.writeHead(200, "succes");
        response.end(JSON.stringify(content));
      })
      .catch((err) => response.end(String(err)));
  } else {
    response.writeHead(404, "error");
    response.end("Error");
  }
});

main.listen(8000);
