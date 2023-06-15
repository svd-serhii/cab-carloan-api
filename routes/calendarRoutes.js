const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/calendarControllers");
const { validateBody } = require("../utils/validateBody");
const { isValidId } = require("../middlewares");
const schemas = require("../utils/validation/eventValidationSchema");

router.get("/get-events", ctrl.getEvents);

router.post("/create-event", validateBody(schemas.addSchema), ctrl.addEvent);

router.delete("/:id", isValidId, ctrl.removeEvent);

// router.put("/:id", authenticate, isValidId, validateBody(schemas.updateSchema), ctrl.updateContact);

module.exports = router;
