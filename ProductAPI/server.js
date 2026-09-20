const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// 100 Products
let products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 25000, category: "Electronics" },
    { id: 3, name: "Tablet", price: 18000, category: "Electronics" },
    { id: 4, name: "Smart Watch", price: 5000, category: "Electronics" },
    { id: 5, name: "Bluetooth Speaker", price: 2500, category: "Electronics" },
    { id: 6, name: "Wireless Earbuds", price: 3000, category: "Electronics" },
    { id: 7, name: "Keyboard", price: 1200, category: "Computer Accessories" },
    { id: 8, name: "Mouse", price: 800, category: "Computer Accessories" },
    { id: 9, name: "Monitor", price: 12000, category: "Computer Accessories" },
    { id: 10, name: "Webcam", price: 2500, category: "Computer Accessories" },

    { id: 11, name: "Headphones", price: 3500, category: "Electronics" },
    { id: 12, name: "Power Bank", price: 1800, category: "Electronics" },
    { id: 13, name: "USB Cable", price: 400, category: "Accessories" },
    { id: 14, name: "Charger", price: 900, category: "Accessories" },
    { id: 15, name: "Hard Disk", price: 4500, category: "Storage" },
    { id: 16, name: "SSD", price: 6000, category: "Storage" },
    { id: 17, name: "Pen Drive", price: 700, category: "Storage" },
    { id: 18, name: "Memory Card", price: 900, category: "Storage" },
    { id: 19, name: "Router", price: 2500, category: "Networking" },
    { id: 20, name: "Network Switch", price: 1800, category: "Networking" },

    { id: 21, name: "T-Shirt", price: 700, category: "Clothing" },
    { id: 22, name: "Jeans", price: 1500, category: "Clothing" },
    { id: 23, name: "Shirt", price: 1200, category: "Clothing" },
    { id: 24, name: "Jacket", price: 2500, category: "Clothing" },
    { id: 25, name: "Hoodie", price: 1800, category: "Clothing" },
    { id: 26, name: "Sweater", price: 1600, category: "Clothing" },
    { id: 27, name: "Shorts", price: 900, category: "Clothing" },
    { id: 28, name: "Track Pants", price: 1100, category: "Clothing" },
    { id: 29, name: "Socks", price: 300, category: "Clothing" },
    { id: 30, name: "Cap", price: 500, category: "Clothing" },

    { id: 31, name: "Running Shoes", price: 2500, category: "Footwear" },
    { id: 32, name: "Sports Shoes", price: 3000, category: "Footwear" },
    { id: 33, name: "Casual Shoes", price: 2200, category: "Footwear" },
    { id: 34, name: "Formal Shoes", price: 2800, category: "Footwear" },
    { id: 35, name: "Sandals", price: 900, category: "Footwear" },
    { id: 36, name: "Slippers", price: 500, category: "Footwear" },
    { id: 37, name: "Boots", price: 3500, category: "Footwear" },
    { id: 38, name: "Sports Sandals", price: 1200, category: "Footwear" },
    { id: 39, name: "Walking Shoes", price: 2000, category: "Footwear" },
    { id: 40, name: "Flip Flops", price: 400, category: "Footwear" },

    { id: 41, name: "Backpack", price: 1500, category: "Bags" },
    { id: 42, name: "Laptop Bag", price: 2200, category: "Bags" },
    { id: 43, name: "Travel Bag", price: 1800, category: "Bags" },
    { id: 44, name: "School Bag", price: 1200, category: "Bags" },
    { id: 45, name: "Handbag", price: 2000, category: "Bags" },
    { id: 46, name: "Wallet", price: 700, category: "Accessories" },
    { id: 47, name: "Belt", price: 600, category: "Accessories" },
    { id: 48, name: "Sunglasses", price: 1000, category: "Accessories" },
    { id: 49, name: "Watch", price: 2500, category: "Accessories" },
    { id: 50, name: "Keychain", price: 200, category: "Accessories" },

    { id: 51, name: "Notebook", price: 100, category: "Stationery" },
    { id: 52, name: "Pen", price: 20, category: "Stationery" },
    { id: 53, name: "Pencil", price: 10, category: "Stationery" },
    { id: 54, name: "Eraser", price: 10, category: "Stationery" },
    { id: 55, name: "Sharpener", price: 15, category: "Stationery" },
    { id: 56, name: "Marker", price: 50, category: "Stationery" },
    { id: 57, name: "Highlighter", price: 60, category: "Stationery" },
    { id: 58, name: "Geometry Box", price: 150, category: "Stationery" },
    { id: 59, name: "Calculator", price: 500, category: "Stationery" },
    { id: 60, name: "Stapler", price: 120, category: "Stationery" },

    { id: 61, name: "Coffee Maker", price: 4500, category: "Home Appliances" },
    { id: 62, name: "Electric Kettle", price: 1800, category: "Home Appliances" },
    { id: 63, name: "Toaster", price: 2200, category: "Home Appliances" },
    { id: 64, name: "Mixer Grinder", price: 3500, category: "Home Appliances" },
    { id: 65, name: "Microwave Oven", price: 9000, category: "Home Appliances" },
    { id: 66, name: "Air Fryer", price: 6000, category: "Home Appliances" },
    { id: 67, name: "Iron", price: 1500, category: "Home Appliances" },
    { id: 68, name: "Vacuum Cleaner", price: 7000, category: "Home Appliances" },
    { id: 69, name: "Room Heater", price: 3000, category: "Home Appliances" },
    { id: 70, name: "Table Fan", price: 1800, category: "Home Appliances" },

    { id: 71, name: "Cricket Bat", price: 2500, category: "Sports" },
    { id: 72, name: "Football", price: 900, category: "Sports" },
    { id: 73, name: "Basketball", price: 1000, category: "Sports" },
    { id: 74, name: "Tennis Racket", price: 2000, category: "Sports" },
    { id: 75, name: "Badminton Racket", price: 1500, category: "Sports" },
    { id: 76, name: "Yoga Mat", price: 800, category: "Sports" },
    { id: 77, name: "Skipping Rope", price: 300, category: "Sports" },
    { id: 78, name: "Dumbbells", price: 1800, category: "Fitness" },
    { id: 79, name: "Resistance Band", price: 500, category: "Fitness" },
    { id: 80, name: "Gym Gloves", price: 700, category: "Fitness" },

    { id: 81, name: "Face Wash", price: 350, category: "Personal Care" },
    { id: 82, name: "Shampoo", price: 450, category: "Personal Care" },
    { id: 83, name: "Conditioner", price: 400, category: "Personal Care" },
    { id: 84, name: "Body Lotion", price: 300, category: "Personal Care" },
    { id: 85, name: "Perfume", price: 1200, category: "Personal Care" },
    { id: 86, name: "Hair Oil", price: 250, category: "Personal Care" },
    { id: 87, name: "Toothpaste", price: 150, category: "Personal Care" },
    { id: 88, name: "Toothbrush", price: 80, category: "Personal Care" },
    { id: 89, name: "Hand Wash", price: 120, category: "Personal Care" },
    { id: 90, name: "Bath Soap", price: 60, category: "Personal Care" },

    { id: 91, name: "Water Bottle", price: 500, category: "Kitchen" },
    { id: 92, name: "Lunch Box", price: 600, category: "Kitchen" },
    { id: 93, name: "Frying Pan", price: 1200, category: "Kitchen" },
    { id: 94, name: "Pressure Cooker", price: 2500, category: "Kitchen" },
    { id: 95, name: "Dinner Set", price: 1800, category: "Kitchen" },
    { id: 96, name: "Glass Set", price: 700, category: "Kitchen" },
    { id: 97, name: "Knife Set", price: 900, category: "Kitchen" },
    { id: 98, name: "Cutting Board", price: 400, category: "Kitchen" },
    { id: 99, name: "Storage Container", price: 800, category: "Kitchen" },
    { id: 100, name: "Kitchen Scale", price: 1000, category: "Kitchen" }
];


// ===============================
// GET ALL PRODUCTS
// ===============================

app.get("/products", (req, res) => {
    res.json(products);
});


// ===============================
// GET PRODUCT BY ID
// ===============================

app.get("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});


// ===============================
// CREATE NEW PRODUCT
// ===============================

app.post("/products", (req, res) => {

    const { name, price, category } = req.body;

    if (!name || !price || !category) {
        return res.status(400).json({
            message: "Name, price and category are required"
        });
    }

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price,
        category: category
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product created successfully",
        product: newProduct
    });
});


// ===============================
// UPDATE PRODUCT
// ===============================

app.put("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, price, category } = req.body;

    product.name = name || product.name;
    product.price = price || product.price;
    product.category = category || product.category;

    res.json({
        message: "Product updated successfully",
        product: product
    });
});


// ===============================
// DELETE PRODUCT
// ===============================

app.delete("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});


// ===============================
// HOME ROUTE
// ===============================

app.get("/", (req, res) => {
    res.send(`
        <h1>Product REST API</h1>
        <p>Total Products: ${products.length}</p>
        <p>Use <b>/products</b> to view all products.</p>
    `);
});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});