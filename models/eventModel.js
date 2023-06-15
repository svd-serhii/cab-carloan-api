const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../utils/handleMongooseError");

const EventSchema = new Schema({
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

EventSchema.post("save", handleMongooseError);

const Event = model("event", EventSchema);

module.exports = { Event };
