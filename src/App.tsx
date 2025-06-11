import React, { useState, useMemo } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function App() {
  const [searchText, setSearchText] = useState("");

  const [products] = useState<Product[]>([
    { id: 1, name: "Sai Kiran", price: 100 },
    { id: 2, name: "Subbu", price: 200 },
    { id: 3, name: "Faiz", price: 300 },
    { id: 4, name: "Anil", price: 400 },
    { id: 5, name: "Karthik", price: 500 },
  ]);

  // 👇 useMemo to cache filtered results unless searchText/products change
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  return (
    <div>
      <h1>useMemo Search Optimization</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
