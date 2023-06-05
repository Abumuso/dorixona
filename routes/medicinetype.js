const express = require("express");
const router = express.Router();
const medicinetypeController = require("../controllers/medicinetype");

//Get all medicinetypes
router.get("/", medicinetypeController.getAllMedicinetypes);

//Get  a single medicinetype
router.get("/:id", medicinetypeController.getMedicinetypeById);

//Create a new medicinetype
router.post("/", medicinetypeController.createMedicinetype);

//Update a medicinetype
router.put("/:id", medicinetypeController.updateMedicinetype);

//Delete a medicinetype
router.delete("/:id", medicinetypeController.deleteMedicinetype);

module.exports = router;
