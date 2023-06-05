const express = require("express");
const router = express.Router();

const regionRoutes = require("./region");
const districtRoutes = require("./district");
const pharmacyRoutes = require("./pharmacy");
const medicinetypeRoutes = require("./medicinetype");
const medicineRoutes = require("./medicine");
const stockRoutes = require("./stock");

router.use("/regions", regionRoutes);
router.use("/districts", districtRoutes);
router.use("/pharmacies", pharmacyRoutes);
router.use("/medicinetypes", medicinetypeRoutes);
router.use("/medicines", medicineRoutes);
router.use("/stocks", stockRoutes);

module.exports = router;
