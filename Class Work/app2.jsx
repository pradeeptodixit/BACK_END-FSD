import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [product, setProduct] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    //Get Products
    const getProducts = async () => {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProduct(data);
    };
    const addProduct = async (e) => {
        e.preventDefault();
        const Product = {
            name: name,
            price: price
        };
        await fetch("http://localhost:5000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Product)
        });
        return (
            <>

            </>
        );
    }
}
export default App;