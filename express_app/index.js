const bodyParser = require("body-parser");
const express = require("express");

const port = 5000;
const app = express();

// Convierte las requests JSON entrantes y coloca la data convertida en req.body
app.use(express.json());

// Evita tener que hacer un JSON.parse() del body de la request
app.use(bodyParser.json({ strict: false }));

// Endpoint GET que retorna información de la app
// url: {URL_APIGATEWAY}/api/info
app.get("/api/info", (req, res) => {
  res.send({ application: "sample-app", version: "1" });
});

// Endpoint POST que retorna el mismo body que recibe
// url: {URL_APIGATEWAY}/api/v1/getback
app.post("/api/v1/getback", async (req, res) => {
  res.send({ ...req.body });
});

app.listen(port, () => {
  console.log(`App listening at port:${port}`);
});
