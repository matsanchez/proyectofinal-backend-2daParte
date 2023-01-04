import { Router } from "express";
import { carritosDao } from "../daos/index.js";
import { productosDao } from "../daos/index.js";

const carritoDao = new carritosDao();
const productoDao = new productosDao();
const carritosRouter = Router();

carritosRouter
  .get("/", async (req, res) => {
    res.send(await carritoDao.getAll());
  })
  .get("/:id", async (req, res) => {
    let rta = await carritoDao.getById(req.params.id);
    rta.status === "error" ? res.status(400).send(rta) : res.send(rta);
  })
  .post("/", async (req, res) => {
    res.send(await carritoDao.create(req.body, req.originalUrl));
  })
  .post("/:id/productos/:id_prod", async (req, res) => {
    let carrito = await carritoDao.getById(req.params.id);
    if (carrito.status === "error") {
      return res.status(400).send(carrito);
    }
    let producto = await productoDao.getById(req.params.id_prod);
    let agregar = await carritoDao.agregarProducto(req.params.id, producto);
    res.send(agregar);
  })
  .put("/:id", async (req, res) => {
    res.send(await carritoDao.updateById(req.params.id, req.body));
  })
  .delete("/:id", async (req, res) => {
    res.send(await carritoDao.deleteById(req.params.id));
  })
  .delete("/:id/productos/:id_prod", async (req, res) => {
    let carrito = await carritoDao.getById(req.params.id);
    if (carrito.status === "error") {
      return res.status(400).send(carrito);
    }
    let producto = await carritoDao.deleteProducto(req.params.id, req.params.id_prod);
    res.send("Producto/s Borrados");
  });

export default carritosRouter;
