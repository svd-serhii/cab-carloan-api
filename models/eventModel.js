const { Schema, model } = require("mongoose");
const moment = require("moment");
const handleMongooseError = require("../utils/handleMongooseError");

const eventSchema = new Schema({
  title: {
    type: String,
    required: [true, "Set name of client"],
  },
  region: {
    type: String,
  },
  branch: {
    type: String,
  },
  brand: {
    type: String,
  },
  credit: {
    type: Number,
  },
  start: {
    type: Date,
    get: (v) => moment(v).format("DD.MM.YYYY"),
    set: (v) => moment(v, "DD.MM.YYYY").toDate(),
    validate: {
      validator: function (value) {
        return moment(value, "DD.MM.YYYY", true).isValid();
      },
      message: "Invalid birth date format (must be dd.mm.yyyy)",
    },
  },
  end: {
    type: Date,
    get: (v) => moment(v).format("DD.MM.YYYY"),
    set: (v) => moment(v, "DD.MM.YYYY").toDate(),
    validate: {
      validator: function (value) {
        return moment(value, "DD.MM.YYYY", true).isValid();
      },
      message: "Invalid birth date format (must be dd.mm.yyyy)",
    },
  },
});

eventSchema.post("save", handleMongooseError);

const Event = model("event", eventSchema);

module.exports = { Event };
