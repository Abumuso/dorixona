const db = require("../config/db");

//Get all medicines
exports.getAllmedicines = (req, res) => {
  db.query("SELECT * FROM medicines", (error, results) => {
    if (error) {
      console.log("Error retrieving medicine:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//Get a single medicine by ID
exports.getMedicineById = (req, res) => {
  const medicineId = req.params.id;
  db.query(
    "SELECT * FROM medicines WHERE id = ?",
    [medicineId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving medicine:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Medicine not found" });
      }
      res.json(results[0]);
    }
  );
};

//Create a new medicine
exports.createMedicine = (req, res) => {
  const { name, manufacturer, medicine_type_id, price, expiryDate, info } =
    req.body;
  db.query(
    "INSERT INTO medicines(name, manufacturer, medicine_type_id, price, expiryDate, info) VALUES (?,?,?,?,?,?)",
    [name, manufacturer, medicine_type_id, price, expiryDate, info],
    (error, results) => {
      if (error) {
        console.log("Error creating medicine", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "Medicine created successfully",
        medicineId: results.insertId,
      });
    }
  );
};

//Update a medicine
exports.updateMedicine = (req, res) => {
  const medicineId = req.params.id;
  const { name, manufacturer, medicine_type_id, price, expiryDate, info } =
    req.body;
  db.query(
    "UPDATE medicines SET name = ?, manufacturer =?, medicine_type_id = ?, price =?, expiryDate = ?, info = ? WHERE id = ?",
    [name, manufacturer, medicine_type_id, price, expiryDate, info, medicineId],
    (error) => {
      if (error) {
        console.log("Error updating medicine: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "Medicine updated successfully" });
    }
  );
};

//Delete a medicine
exports.deleteMedicine = (req, res) => {
  const medicineId = req.params.id;
  db.query("DELETE FROM medicines WHERE id = ?", [medicineId], (error) => {
    if (error) {
      console.log("Error deleting medicine:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ messsage: "Medicine deleted successfully" });
  });
};
