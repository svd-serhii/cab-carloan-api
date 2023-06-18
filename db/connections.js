const mongoose = require("mongoose");

const connectionDB = async (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = { connectionDB };
