import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    nombre: { type: String, require: true, max: 100 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default carritosSchema = model("carritos", schema);
