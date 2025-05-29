import express from "express";
import path, { dirname } from "path"; 
import { fileURLToPath } from "url";
import { Collection } from "mongodb";
import cors from "cors";
import bcrypt from "bcrypt";
import "./mongodb.js";
import { User } from "./mongodb.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 9992;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the Angular build output
app.use(express.static(path.join(__dirname, "dist/product-store")));

// API Endpoint for data
app.get("/data", (req, res) => {
  console.log("Sending data...");
  res.json({ message: "Data response" });
});

// Serve Angular app for all routes
const serveAngularApp = (req, res) => {
  res.sendFile(path.join(__dirname, "dist/product-store", "index.html"));
};

app.get(
  ["/", "/main", "/shopping-cart", "/sales", "/products", "/login", "/signup"],
  serveAngularApp
);

// Register user
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await collection.create({ email, password: hashedPassword });

    console.log("User saved:", user);
    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Catch-all route to serve Angular app
app.get("*", serveAngularApp);

// Start server
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
