import Manager from "../../controllers/manager.mongodb.js";
import { productosSchema } from "../../models/productos.model.js";

export class ProductosDaoMongo extends Manager {
  constructor() {
    super(productosSchema);
  }
}
