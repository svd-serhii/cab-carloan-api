const app = require("./app");
const { connectionDB } = require("./db/connections");

const { PORT = 3050 } = process.env;

const startServer = async () => {
  try {
    await connectionDB();
    console.log(`${new Date().toLocaleString()}: Database connection successful`);
    app.listen(PORT, () => {
      console.log(`${new Date().toLocaleString()}: Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
