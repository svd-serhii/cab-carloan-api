const { Schema, model } = require("mongoose");

const handleMongooseError = require("../utils/handleMongooseError");

const eventSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name of client"],
  },
  carBrand: {
    type: String,
  },
  loanAmount: {
    type: Number,
  },
  day: {
    type: Date,
  },
});

eventSchema.post("save", handleMongooseError);

const Event = model("event", eventSchema);

module.exports = { Event };
