import SearchBar from './Componants/SearchBar'; 
import ProductTable from './Componants/ProductTable'; 
import React, { useState } from 'react';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div>
      <SearchBar setFilteredProducts={setFilteredProducts} products={products} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default App;
