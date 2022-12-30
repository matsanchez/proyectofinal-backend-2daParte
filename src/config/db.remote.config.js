import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err + "🛑 No se pudo conectar a la base de datos");
    } else {
      console.log("🚀 Conectado a la base de datos de mongo");
    }
  }
);
