import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Express REST API is running successfully!");
});

// GET products
app.get("/api/products", (req, res) => {
  const data = fs.readFileSync("products.json", "utf-8");
  const products = JSON.parse(data);

  res.json(products);
});

// POST product
app.post("/api/products", (req, res) => {
  const data = fs.readFileSync("products.json", "utf-8");
  const products = JSON.parse(data);

  const newId =
    products.length === 0
      ? 1
      : Math.max(...products.map((product) => product.id)) + 1;

  const newProduct = {
    id: newId,
    name: req.body.name,
    price: Number(req.body.price),
  };

  products.push(newProduct);

  fs.writeFileSync(
    "products.json",
    JSON.stringify(products, null, 2)
  );

  res.status(201).json(newProduct);
});

// DELETE product
app.delete("/api/products/:id", (req, res) => {
  const data = fs.readFileSync("products.json", "utf-8");
  let products = JSON.parse(data);

  const id = parseInt(req.params.id);

  const productExists = products.some(
    (product) => product.id === id
  );

  if (!productExists) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products = products.filter(
    (product) => product.id !== id
  );

  fs.writeFileSync(
    "products.json",
    JSON.stringify(products, null, 2)
  );

  res.json({
    message: "Product deleted successfully",
  });
});

// START SERVER
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});