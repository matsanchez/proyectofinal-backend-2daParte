import Manager from "../../controllers/manager.firestore.js";

export class ProductosDaoFirestore extends Manager {
  constructor(table) {
    super("productos");
  }
}
