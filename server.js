const app = require("./app");
const { connectionDB } = require("./db/connections");

const { DB_HOST, PORT = 3050 } = process.env;

const startServer = async () => {
  try {
    await connectionDB(DB_HOST);
    console.log(`${new Date().toLocaleString()}: Database connection successful`);
    app.listen(PORT, () => {
      console.log(`${new Date().toLocaleString()}: Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
