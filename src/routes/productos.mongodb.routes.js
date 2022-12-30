import { Router } from "express";
import { productosDao } from "../daos/index.js";
import { validationBody } from "../middleware/middlewares.js";

const productoDao = new productosDao();
const productosRouter = Router();

productosRouter
  .get("/", (req, res) => {})
  .get("/:id", async (req, res) => {
    let rta = await productoDao.getById(req.params.id);
    rta.status === "error" ? res.status(400).send(rta) : res.send(rta);
  })
  .post("/", validationBody, async (req, res) => {
    res.send(await productoDao.create(req.body));
  })
  .put("/:id", async (req, res) => {
    res.send(await productoDao.updateById(req.params.id, req.body));
  })
  .delete("/:id", async (req, res) => {
    res.send(await productoDao.deleteById(req.params.id));
  });

export default productosRouter;
