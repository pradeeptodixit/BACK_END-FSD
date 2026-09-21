import {useState,useEffect} from "react";

const App = () => {
  const[products,setProducts]=useState([]);
  const[name,setName]=useState("");
  const[price,setPrice]=useState("");

 //get products
  const getProducts=async()=>{
    const response=await fetch("http://localhost:4000");
    const data=await response.json();
    setProducts(data);
  }

  //add product
  const addProduct=async(e)=>{
    e.preventDefault();
    const product={
      name:name,
      price:price
    };
    await fetch("http://localhost:4000/products", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(product)({
        
      })
    });
  }



  return (
    <div>
      <h1>Product Mangaement App</h1>
      <form onSubmit={addProduct}>
        <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="number" placeholder="price" value={price} onChange={(e)=>
          setPrice(e.target.value)
        }/>
        <button type="submit">Add</button>
      </form>
      <hr/>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default App;