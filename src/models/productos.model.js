import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    nombre: { type: String, require: true, max: 100 },
    descripcion: { type: String, require: true, max: 100 },
    precio: { type: Number, require: true, max: 100 },
    codigo: { type: Number, require: true, max: 100 },
    foto: { type: String, require: true, max: 100 },
    stock: { type: Number, require: true, max: 100 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const productosSchema = model("productos", schema);
