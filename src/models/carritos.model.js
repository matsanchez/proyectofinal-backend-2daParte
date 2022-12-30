import { Schema, model, mongoose } from "mongoose";

const schema = new Schema(
  {
    productos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productos",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const carritosSchema = model("carritos", schema);
