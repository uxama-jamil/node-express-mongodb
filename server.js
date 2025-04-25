import express from "express";
import dotenv from "dotenv";
import route from "./routes/bootcamps.js";
import { logger } from "./middleware/logger.js";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/error.js";

dotenv.config({ path: "./config/config.env" });

const app = express();
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//body parser
app.use(express.json());
app.use(logger);

app.use("/api/v1/bootcamps", route);
app.use(errorHandler);
const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${port}`)
);

// handle unhandled rejection event handling
process.on("unhandledRejection", (error, promise) => {
  // error logs
  console.log(`Error: ${error.message}`);
  // close and exit the server
  server.close(() => process.exit(1));
});
