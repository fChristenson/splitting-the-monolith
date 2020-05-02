const express = require("express");
const app = express();

app.use(express.json());

// Validation features
app.get("/api/v1/login", (req, res) => {
  res.end("login");
});

app.get("/api/v1/register", (req, res) => {
  res.end("register");
});

// User features
app.post("/api/v1/users", (req, res) => {
  res.end("users");
});

app.get("/api/v1/users/:id", (req, res) => {
  res.end("users");
});

app.put("/api/v1/users/:id", (req, res) => {
  res.end("users");
});

// Admin user features
app.get("/api/v1/users", (req, res) => {
  res.end("users");
});

app.delete("/api/v1/users/:id", (req, res) => {
  res.end("users");
});

// Product features
app.get("/api/v1/products", (req, res) => {
  res.end("products");
});

app.get("/api/v1/products/:id", (req, res) => {
  res.end("products");
});

// Admin product features
app.post("/api/v1/products", (req, res) => {
  res.end("products");
});

app.put("/api/v1/products/:id", (req, res) => {
  res.end("products");
});

app.delete("/api/v1/products/:id", (req, res) => {
  res.end("products");
});

// Order features
app.post("/api/v1/orders", (req, res) => {
  res.end("orders");
});

app.get("/api/v1/orders/:id", (req, res) => {
  res.end("orders");
});

// Admin order features
app.get("/api/v1/orders", (req, res) => {
  res.end("orders");
});

app.put("/api/v1/orders/:id", (req, res) => {
  res.end("orders");
});

app.delete("/api/v1/orders/:id", (req, res) => {
  res.end("orders");
});

module.exports = app;
