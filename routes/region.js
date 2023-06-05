const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region");

//Get all regions
router.get("/", regionController.getAllRegions);

//Get  a single region
router.get("/:id", regionController.getRegionById);

//Create a new region
router.post("/", regionController.createRegion);

//Update a region
router.put("/:id", regionController.updateRegion);

//Delete a region
router.delete("/:id", regionController.deleteRegion);

module.exports = router;

