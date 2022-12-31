import Manager from "../../controllers/manager.sqlite3.js";
import { configSqlite } from "../../config/db.config.js";

export class ProductosDaoSqlite3 extends Manager {
  constructor() {
    super(configSqlite, "productos");
  }
}
