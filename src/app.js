import productosRouter from "./routes/productos.routes.js";
import carritosRouter from "./routes/carritos.routes.js";
import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", productosRouter);
app.use("/api/carritos", carritosRouter);
app.use((req, res) => {
  res.status(404).send({
    error: -2,
    descripcion: `ruta ${req.baseUrl} ${req.url} metodo ${req.method} no implementada`,
  });
});

app.get("/", (req, res) => {
  res.send("Segunda Entrega Proyecto Final Backend!");
});

app.listen(PORT, () => {
  console.log(`>>>>> 🚀 Server Up! Port: ${PORT} <<<<<`);
});
