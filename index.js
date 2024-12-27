import express from "express";
const app = express();
const PORT = 3000;

import routes from "./routes/index.js";

app.use(express.json());

app.use("/api/v1/", routes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
