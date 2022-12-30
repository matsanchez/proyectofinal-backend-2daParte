import dotenv from "dotenv";
import { ProductosDaoMongo } from "./productos/productos.dao.mongodb.js";
dotenv.config();

let productosDao;
let carritosDao;

switch (process.env.VAR_DB_PERSISTENCIA) {
  case "mongo":
    productosDao = ProductosDaoMongo;
    break;
  case "firebase":
    productoDao = ProductosDaoFirestore;
    break;

  default:
    break;
}

export { productosDao };
