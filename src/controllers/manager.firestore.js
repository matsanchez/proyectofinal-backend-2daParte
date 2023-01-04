import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync("./access.firebase.json", "utf-8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
console.log("🚀 Conectado a la base de datos de Firestore");

const db = admin.firestore();

class Manager {
  constructor(table) {
    this._db = db;
    this._table = table;
  }

  async create(params, url) {
    if (url === "/api/carritos/") {
      params = {
        productos: [],
      };
    }
    const rta = await this._db.collection(this._table).add(params);
    return { status: "success", mensaje: "Producto agregado exitosamente" };
  }
  async getAll() {
    const list = [];
    const data = await this._db.collection(this._table).get();
    const result = data.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));
    return list;
  }
  async getById(id) {
    const data = await this._db.collection(this._table).doc(id).get();
    return { ...data.data(), id: data.id };
  }
  async agregarProducto(id, params) {
    try {
      let list = [];
      const dataObj = await this.getById(id);
      list.push(...dataObj.productos);
      list.push(params);
      await this._db.collection(this._table).doc(id).update({ productos: list });
    } catch (error) {
      console.log(error.message);
    }
  }
  async deleteProducto(id, idProd) {
    try {
      let list = [];
      const dataObj = await this.getById(id);
      list.push(...dataObj.productos);
      let newList = list.filter((prod) => prod.id !== idProd);
      await this._db.collection(this._table).doc(id).update({ productos: newList });
    } catch (error) {
      console.log(error.message);
    }
  }
  async updateById(id, params) {
    const data = this._db
      .collection(this._table)
      .doc(id)
      .update(JSON.parse(JSON.stringify(params)));
    return { ...data.data(), id: data.id };
  }
  async deleteById(id) {
    const data = await this._db.collection(this._table).doc(id);
    const boolean = await data.get();
    if (boolean.exists) {
      data.delete();
      return { status: "success", mensaje: "Producto eliminado" };
    } else {
      return { status: "error", mensaje: "No existe producto con ese ID" };
    }
  }
}

export default Manager;
