import dotenv from "dotenv";
import { ProductosDaoMongo } from "./productos/productos.dao.mongodb.js";
import { ProductosDaoFirestore } from "./productos/productos.dao.firestore.js";
import { CarritosDaoFirestore } from "./carritos/carritos.dao.firestore.js";
import { CarritosDaoMongo } from "./carritos/carritos.dao.mongodb.js";
dotenv.config();

let productosDao;
let carritosDao;

switch (process.env.VAR_DB_PERSISTENCIA) {
  case "mongo":
    productosDao = ProductosDaoMongo;
    carritosDao = CarritosDaoMongo;
    import("../config/db.remote.config.js").then((mod) => mod.init());
    break;
  case "firestore":
    productosDao = ProductosDaoFirestore;
    carritosDao = CarritosDaoFirestore;
    break;

  default:
    break;
}

export { productosDao, carritosDao };
