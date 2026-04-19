const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get("/notes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM notes ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/notes", async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({ error: "Note content is required" });
    }

    const result = await pool.query(
      "INSERT INTO notes (content) VALUES ($1) RETURNING *",
      [content]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to add note" });
  }
});

app.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM notes WHERE id = $1", [id]);

    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete note" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});