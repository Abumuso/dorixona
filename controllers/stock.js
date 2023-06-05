const db = require("../config/db");

//Get all stocks
exports.getAllstocks = (req, res) => {
  db.query("SELECT * FROM stock", (error, results) => {
    if (error) {
      console.log("Error retrieving stock:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//Get a single stock by ID
exports.getStockById = (req, res) => {
  const stockId = req.params.id;
  db.query("SELECT * FROM stock WHERE id = ?", [stockId], (error, results) => {
    if (error) {
      console.log("Error retrieving stock:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Stock not found" });
    }
    res.json(results[0]);
  });
};

//Create a new stock
exports.createStock = (req, res) => {
  const { pharmacy_id, medicine_id, quantity } =
    req.body;
  db.query(
    "INSERT INTO stock(pharmacy_id, medicine_id, quantity) VALUES (?,?,?)",
    [pharmacy_id, medicine_id, quantity],
    (error, results) => {
      if (error) {
        console.log("Error creating stock", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "Stock created successfully",
        stockId: results.insertId,
      });
    }
  );
};

//Update a stock
exports.updateStock = (req, res) => {
  const stockId = req.params.id;
  const { pharmacy_id, medicine_id, quantity } = req.body;
  db.query(
    "UPDATE stock SET pharmacy_id = ?, medicine_id =?, quantity = ? WHERE id = ?",
    [pharmacy_id, medicine_id, quantity, stockId],
    (error) => {
      if (error) {
        console.log("Error updating stock: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "Stock updated successfully" });
    }
  );
};

//Delete a stock
exports.deleteStock = (req, res) => {
  const stockId = req.params.id;
  db.query("DELETE FROM stock WHERE id = ?", [stockId], (error) => {
    if (error) {
      console.log("Error deleting stock:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ messsage: "Stock deleted successfully" });
  });
};
