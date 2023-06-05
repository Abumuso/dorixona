const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicine");

//Get all medicine
router.get("/", medicineController.getAllmedicines);

//Get  a single medicine
router.get("/:id", medicineController.getMedicineById);

//Create a new medicine
router.post("/", medicineController.createMedicine);

//Update a medicine
router.put("/:id", medicineController.updateMedicine);

//Delete a medicine
router.delete("/:id", medicineController.deleteMedicine);

module.exports = router;
