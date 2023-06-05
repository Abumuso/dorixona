const db = require("../config/db");

//Get all medicinetype
exports.getAllMedicinetypes = (req, res) => {
  db.query("SELECT * FROM medicinetype", (error, results) => {
    if (error) {
      console.log("Error retrieving medicinetype:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//Get a single medicinetype by ID
exports.getMedicinetypeById = (req, res) => {
  const medicinetypeId = req.params.id;
  db.query(
    "SELECT * FROM medicinetype WHERE id = ?",
    [medicinetypeId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving medicinetype:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Medicinetype not found" });
      }
      res.json(results[0]);
    }
  );
};

//Create a new medicinetype
exports.createMedicinetype = (req, res) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO medicinetype(name) VALUES (?)",
    [name],
    (error, results) => {
      if (error) {
        console.log("Error creating medicinetype", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "Medicinetype created successfully",
        medicinetypeId: results.insertId,
      });
    }
  );
};

//Update a medicinetype
exports.updateMedicinetype = (req, res) => {
  const medicinetypeId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE medicinetype SET name = ? WHERE id = ?",
    [name, medicinetypeId],
    (error) => {
      if (error) {
        console.log("Error updating medicinetype: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "Medicinetype updated successfully" });
    }
  );
};

//Delete a medicinetype
exports.deleteMedicinetype = (req, res) => {
  const medicinetypeId = req.params.id;
  db.query(
    "DELETE FROM medicinetype WHERE id = ?",
    [medicinetypeId],
    (error) => {
      if (error) {
        console.log("Error deleting medicinetype:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ messsage: "Medicinetype deleted successfully" });
    }
  );
};
