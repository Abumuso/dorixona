const db = require("../config/db");

//Get all pharmacy
exports.getAllPharmacies = (req, res) => {
  db.query("SELECT * FROM pharmacies", (error, results) => {
    if (error) {
      console.log("Error retrieving pharmacies:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//Get a single pharmacy by ID
exports.getPharmacyById = (req, res) => {
  const pharmacyId = req.params.id;
  db.query(
    "SELECT * FROM pharmacies WHERE id = ?",
    [pharmacyId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving pharmacy:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Pharmacy not found" });
      }
      res.json(results[0]);
    }
  );
};

//Create a new pharmacy
exports.createPharmacy = (req, res) => {
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;
  db.query(
    "INSERT INTO pharmacies(name, address, location, phone, email, region_id, district_id) VALUES (?,?,?,?,?,?,?)",
    [name, address, location, phone, email, region_id, district_id],
    (error, results) => {
      if (error) {
        console.log("Error creating pharmacy", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "Pharmacy created successfully",
        pharmacyId: results.insertId,
      });
    }
  );
};

//Update a pharmacy
exports.updatePharmacy = (req, res) => {
  const pharmacyId = req.params.id;
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;
  db.query(
    "UPDATE pharmacies SET name = ?, address = ?, location = ?, phone = ?, email = ? region_id = ?, district_id = ? WHERE id = ?",
    [name, address, location, phone, email, region_id, district_id, pharmacyId],
    (error) => {
      if (error) {
        console.log("Error updating pharmacy: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "Pharmacy updated successfully" });
    }
  );
};

//Delete a pharmacy
exports.deletePharmacy = (req, res) => {
  const pharmacyId = req.params.id;
  db.query("DELETE FROM pharmacies WHERE id = ?", [pharmacyId], (error) => {
    if (error) {
      console.log("Error deleting pharmacies:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ messsage: "Pharmacy deleted successfully" });
  });
};
