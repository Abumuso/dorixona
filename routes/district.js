const express = require("express");
const router = express.Router();
const districtController = require("../controllers/district");

//Get all districts
router.get("/", districtController.getAllDistricts);

//Get  a single district
router.get("/:id", districtController.getDistrictById);

//Create a new district
router.post("/", districtController.createDistrict);

//Update a district
router.put("/:id", districtController.updateDistrict);

//Delete a district
router.delete("/:id", districtController.deleteDistrict);

module.exports = router;
