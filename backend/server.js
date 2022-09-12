const app = require("./app");

// env
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
// config

dotenv.config({ path: "backend/config/config.env" });

// Connecting to database

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
