const express = require("express");
const router = express.Router();
const pharmacyController = require("../controllers/pharmacy");

//Get all pharmacies
router.get("/", pharmacyController.getAllPharmacies);

//Get  a single pharmacy
router.get("/:id", pharmacyController.getPharmacyById);

//Create a new pharmacy
router.post("/", pharmacyController.createPharmacy);

//Update a pharmacy
router.put("/:id", pharmacyController.updatePharmacy);

//Delete a pharmacy
router.delete("/:id", pharmacyController.deletePharmacy);

module.exports = router;
