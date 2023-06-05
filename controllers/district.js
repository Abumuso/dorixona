const db = require("../config/db");

//Get all district
exports.getAllDistricts = (req, res) => {
  db.query("SELECT * FROM districts", (error, results) => {
    if (error) {
      console.log("Error retrieving districts:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//Get a single district by ID
exports.getDistrictById = (req, res) => {
  const districtId = req.params.id;
  db.query(
    "SELECT * FROM districts WHERE id = ?",
    [districtId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving district:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "District not found" });
      }
      res.json(results[0]);
    }
  );
};

//Create a new district
exports.createDistrict = (req, res) => {
  const { name, region_id } = req.body;
  db.query(
    "INSERT INTO districts(name, region_id) VALUES (?,?)",
    [name, region_id],
    (error, results) => {
      if (error) {
        console.log("Error creating district", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "District created successfully",
        districtId: results.insertId,
      });
    }
  );
};

//Update a district
exports.updateDistrict = (req, res) => {
  const districtId = req.params.id;
  const { name, region_id } = req.body;
  db.query(
    "UPDATE districts SET name = ?, region_id = ? WHERE id = ?",
    [name, region_id, districtId],
    (error) => {
      if (error) {
        console.log("Error updating district: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "District updated successfully" });
    }
  );
};

//Delete a district
exports.deleteDistrict = (req, res) => {
  const districtId = req.params.id;
  db.query("DELETE FROM districts WHERE id = ?", [districtId], (error) => {
    if (error) {
      console.log("Error deleting districts:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ messsage: "District deleted successfully" });
  });
};
