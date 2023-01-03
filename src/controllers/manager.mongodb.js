/*import "../config/db.remote.config.js"*/

class Manager {
  constructor(table) {
    this._table = table;
  }

  async create(params) {
    const item = new this._table(params);
    item.save();
    return { status: "success", mensaje: "Producto agregado exitosamente" };
  }
  async getAll() {
    return await this._table.find();
  }
  async getById(id) {
    try {
      return await this._table.findById({ _id: id });
    } catch (error) {
      return {
        status: "error",
        mensaje: "No existe producto con ese ID o es un formato invalido",
      };
    }
  }
  async agregarProducto(id, params) {
    try {
      return this._table.findByIdAndUpdate(id, { productos: params });
    } catch (error) {}
  }
  async updateById(id, params) {
    try {
      return this._table.findByIdAndUpdate(id, { params });
    } catch (error) {
      console.log(error.message);
    }
  }
  async deleteById(id) {
    try {
      return this._table.findByIdAndDelete({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }
}

export default Manager;
