import { Router } from "express";
import { carritosDao } from "../daos/index.js";

const carritoDao = new carritosDao();
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
  .put("/:id", async (req, res) => {
    res.send(await carritoDao.updateById(req.params.id, req.body));
  })
  .delete("/:id", async (req, res) => {
    res.send(await carritoDao.deleteById(req.params.id));
  });

export default carritosRouter;
