import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap() {
  try {
    await mongoose.connect(
      "mongodb+srv://university-admin:oAeE3rTmAp7iJeeM@cluster0.eveocjd.mongodb.net/university-management?retryWrites=true&w=majority"
    );
    console.log("Database connection established");

    app.listen(config.port, () => {
      console.log(`application is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(
      "Database connection failed: " +
        error +
        ` But got the connection from ${config.database_url}`
    );
  }
}

bootstrap();
