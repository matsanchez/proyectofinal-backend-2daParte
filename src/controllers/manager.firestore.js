class Manager {
  constructor(table) {
    this._table = table;
  }

  async create(params) {
    const items = new this._table(params);
    items.save();
  }
  async getAll() {
    return await this._table.find();
  }
  async getById(id) {
    return await this._table.findById(id);
  }
  async updateById() {}
  async deleteById() {}
}

export default Manager;
