import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to load products.");
    } finally {
      setLoading(false);
    }
  };

  // Load products when page opens
  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product
  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!name.trim() || !price) {
      alert("Please enter product name and price.");
      return;
    }

    try {
      setAdding(true);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          price: Number(price),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const newProduct = await response.json();

      setProducts((currentProducts) => [
        ...currentProducts,
        newProduct,
      ]);

      setName("");
      setPrice("");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to add product.");
    } finally {
      setAdding(false);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts((currentProducts) =>
        currentProducts.filter(
          (product) => product.id !== id
        )
      );

      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to delete product.");
    }
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div>
          <p className="eyebrow">EXPRESS + REACT</p>

          <h1>Product Store</h1>

          <p className="subtitle">
            Manage your products through a React frontend
            connected to an Express REST API.
          </p>
        </div>

        <div className="product-count">
          <span>{products.length}</span>
          <small>Products</small>
        </div>
      </header>

      {/* Add Product */}
      <section className="add-section">

        <div className="section-title">
          <h2>Add New Product</h2>

          <p>
            Create a product and save it directly to
            products.json.
          </p>
        </div>

        <form
          className="product-form"
          onSubmit={handleAddProduct}
        >
          <div className="input-group">
            <label>Product Name</label>

            <input
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group price-input">
            <label>Price</label>

            <input
              type="number"
              min="0"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button
            className="add-button"
            type="submit"
            disabled={adding}
          >
            {adding ? "Adding..." : "+ Add Product"}
          </button>
        </form>
      </section>

      {/* Error */}
      {error && (
        <div className="error-box">
          {error}
        </div>
      )}

      {/* Products */}
      <section className="products-section">

        <div className="products-heading">
          <div>
            <p className="eyebrow">PRODUCT INVENTORY</p>
            <h2>All Products</h2>
          </div>

          <button
            className="refresh-button"
            onClick={fetchProducts}
          >
            ↻ Refresh
          </button>
        </div>

        {loading ? (
          <div className="loading-box">
            <div className="loader"></div>
            <p>Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="empty-box">
            <h3>No products found</h3>
            <p>Add your first product using the form above.</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table>

              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Product ID</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>

                    <td className="number">
                      {index + 1}
                    </td>

                    <td>
                      <div className="product-name">
                        <div className="product-icon">
                          {product.name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <span>{product.name}</span>
                      </div>
                    </td>

                    <td className="price">
                      ₹{Number(product.price).toLocaleString("en-IN")}
                    </td>

                    <td>
                      <span className="id-badge">
                        #{product.id}
                      </span>
                    </td>

                    <td>
                      <button
                        className="delete-button"
                        onClick={() =>
                          handleDeleteProduct(product.id)
                        }
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

      </section>

      {/* Footer */}
      <footer>
        <p>
          React Frontend • Express REST API • JSON Storage
        </p>
      </footer>

    </div>
  );
}

export default App;