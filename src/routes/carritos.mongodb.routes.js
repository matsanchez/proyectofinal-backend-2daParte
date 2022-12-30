import { Router } from "express";

const carritosRouter = Router();

carritosRouter
  .get("/", (req, res) => {})
  .get("/:id", (req, res) => {})
  .post("/", (req, res) => {})
  .put("/:id", (req, res) => {})
  .delete("/:id", (req, res) => {});

export default carritosRouter;
