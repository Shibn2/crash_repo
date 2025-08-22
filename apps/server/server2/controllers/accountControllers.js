const pool = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "shhh!secret";

exports.userMe = async function (req, res) {
  try {
    console.log("Hit at user me ");
    const result = await pool.query("SELECT * FROM users LIMIT 1");
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error at: ", err);
    res.status(500).send("Error fetching user");
  }
};

exports.signup = async function (req, res) {
  console.log("Hit signup");
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All field are required!" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, hashedPassword]
    );
    const token = jwt.sign({ id: result.rows[0].id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ user: result.rows[0], token });
  } catch (err) {
    console.error("Error at sign up:", err);
    if (err.code === "23505") {
      res.status(400).json({ error: "Email already exists!" });
    } else {
      res.status(500).json({ error: "Signup failed" });
    }
  }
};

exports.login = async function (req, res) {
  console.log("Hit login");
  const { name, email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0];
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({
      message: "Login successful",
      user: { id: user.id, email: user.email },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
};

exports.systemStatus = function (req, res) {
  console.log("Hit systemStatus");
  res.json({ hasUsers: false });
};
