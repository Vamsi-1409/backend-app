const pool = require("../db/mysql");

const getProducts = async (req, res) => {

  try {

    const [rows] = await pool.query(
      "SELECT * FROM products"
    );

    res.json(rows);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};

module.exports = {
  getProducts
};