import knex from "knex";

class Manager {
  constructor(config, table) {
    this._db = knex(config);
    this._table = table;
    this.connectionTable();
  }

  async connectionTable() {
    try {
      const isCreated = await this._db.schema.hasTable(this._table);
      if (isCreated) {
      } else {
        if (this._table === "carritos") {
          await this._db.schema.createTable(this._table, (table) => {
            table.increments("id");
            table.string("producto");
            table.timestamps(true, true);
          });
          console.log(`✅ Tabla ${this._table} creada exitosamente en SQlite3`);
        } else if (this._table === "productos") {
          await this._db.schema.createTable(this._table, (table) => {
            table.increments("id");
            table.string("nombre");
            table.string("descripcion");
            table.integer("precio");
            table.integer("codigo");
            table.string("foto");
            table.integer("stock");
            table.timestamps(true, true);
          });
          console.log(`✅ Tabla ${this._table} creada exitosamente en SQlite3`);
        }
      }
    } catch (error) {
      console.log("error", error.message);
    }
  }

  async create(obj) {
    try {
      let id = await this._db(this._table).insert(obj);
      return id;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getById(row) {
    try {
      let data = await this._db(this._table).whereRaw("id = ?", row);
      return JSON.parse(JSON.stringify(...data));
    } catch (error) {
      console.log(error.message);
    }
  }

  async getAll() {
    try {
      let data = await this._db.from(this._table).select("*");
      return JSON.parse(JSON.stringify(data));
    } catch (error) {
      console.log(error.message);
    }
  }

  async updateById(params) {
    try {
      let content;
      if (this._table === "productos") {
        let content = {
          nombre: params.nombre,
          descripcion: params.descripcion,
          precio: params.precio,
          codigo: params.codigo,
          foto: params.foto,
          stock: params.stock,
        };
      } else if (this._table === "carritos") {
        let content = { producto: params.producto };
      }
      let data = await this._db(this._table)
        .where({ id: params.id })
        .update(content);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteById(id) {
    try {
      let data = await this._db(this._table).where({ id: id }).del();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default Manager;
