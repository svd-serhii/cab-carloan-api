const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3050 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
      console.log(`Server running. Use our API on port: ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
