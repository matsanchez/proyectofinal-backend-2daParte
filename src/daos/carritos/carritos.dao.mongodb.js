import Manager from "../../controllers/manager.mongodb.js";
import { carritosSchema } from "../../models/carritos.model.js";

export class CarritosDaoMongo extends Manager {
  constructor() {
    super(carritosSchema);
  }
}
