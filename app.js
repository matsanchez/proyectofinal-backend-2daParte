/*import "./src/daos/index.js";*/
import productosRouter from "./src/routes/productos.mongodb.routes.js";
import carritosRouter from "./src/routes/carritos.mongodb.routes.js";
import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", productosRouter);
app.use("/api/carritos", carritosRouter);

app.get("/", (req, res) => {
  res.send("Segunda Entrega Proyecto Final Backend!");
});

app.listen(PORT, () => {
  console.log("Conectadooooooooooooooo");
});
