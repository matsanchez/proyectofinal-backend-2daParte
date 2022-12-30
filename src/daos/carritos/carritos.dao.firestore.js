import Manager from "../../controllers/manager.firestore.js";

export class CarritosDaoFirestore extends Manager {
  constructor(table) {
    super("carritos");
  }
}
