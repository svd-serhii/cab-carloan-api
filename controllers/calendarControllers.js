const ctrlWrapper = require("../utils/ctrlWrapper");
const HttpError = require("../helpers/HttpError");
const { Event } = require("../models/eventModel");
const moment = require("moment");

const addEvent = async (req, res) => {
  //   const { _id: owner } = req.user;

  const result = await Event.create({ ...req.body });
  res.status(201).json(result);
};

const getEvents = async (req, res) => {
  const events = await Event.find({
    day: { $day: moment(req.query.day).toDate() },
  });
  res.status(201).json(events);
};

const removeEvent = async (req, res) => {
  const { id } = req.params;
  const result = await Event.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Event with ${id} not found`);
  }

  res.status(200).json({
    message: "Delete success",
  });
};

module.exports = {
  addEvent: ctrlWrapper(addEvent),
  getEvents: ctrlWrapper(getEvents),
  removeEvent: ctrlWrapper(removeEvent),
};
