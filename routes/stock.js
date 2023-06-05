const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stock");

//Get all stock
router.get("/", stockController.getAllstocks);

//Get  a single stock
router.get("/:id", stockController.getStockById);

//Create a new stock
router.post("/", stockController.createStock);

//Update a stock
router.put("/:id", stockController.updateStock);

//Delete a stock
router.delete("/:id", stockController.deleteStock);

module.exports = router;
