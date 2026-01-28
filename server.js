const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Practice 11 backend is running" });
});


app.get("/version", (req, res) => {
  res.json({
    version: "1.1",
    updatedAt: "2026-01-28"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
