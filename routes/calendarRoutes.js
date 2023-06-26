const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/calendarControllers");
const validateBody = require("../utils/validateBody");
const { isValidId } = require("../middlewares");
const schemas = require("../utils/validation/eventValidationSchema");

router.get("/", ctrl.getEvents);

router.post("/add", validateBody(schemas.addSchema), ctrl.addEvent);

router.delete("/:id", isValidId, ctrl.removeEvent);

router.patch("/:id", isValidId, validateBody(schemas.updateSchema), ctrl.updateEvent);

module.exports = router;
