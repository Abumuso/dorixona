const db = require("../config/db");

//Get all regions
exports.getAllRegions = (req, res) => {
  db.query("SELECT * FROM regions", (error, results) => {
    if (error) {
      console.log("Error retrieving regions:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//Get a single region by ID
exports.getRegionById = (req, res) => {
  const regionId = req.params.id;
  db.query(
    "SELECT * FROM regions WHERE id = ?",
    [regionId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving region:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Region not found" });
      }
      res.json(results[0]);
    }
  );
};

//Create a new region
exports.createRegion = (req, res) => {
  const { id, name } = req.body;
  db.query(
    "INSERT INTO regions(id,name) VALUES (?,?)",
    [id, name],
    (error, results) => {
      if (error) {
        console.log("Error creating region", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "Region created successfully",
        regionId: results.insertId,
      });
    }
  );
};

//Update a region
exports.updateRegion = (req, res) => {
  const regionId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE regions SET name = ? WHERE id = ?",
    [name, regionId],
    (error) => {
      if (error) {
        console.log("Error updating region: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "Region updated successfully" });
    }
  );
};

//Delete a region
exports.deleteRegion = (req, res) => {
  const regionId = req.params.id;
  db.query("DELETE FROM regions WHERE id = ?", [regionId], (error) => {
    if (error) {
      console.log("Error deleting regions:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ messsage: "Region deleted successfully" });
  });
};
