import React from 'react';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
  return (
    <div>
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <Checkbox />
    </div>
  );
}

function Checkbox() {
  return (
    <div>
      <input type="checkbox" name="checkbox" id="checkbox" />
      N'afficher que les produits en stock
    </div>
  );
}

function ProductTable(props) {
  const { products } = props;
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div>
      {categories.map(category => (
        <ProductCategoryRow key={category} category={category} products={products} />
      ))}
    </div>
  );
}

function ProductCategoryRow(props) {
  const { category, products } = props;
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div>
      <h2>{category}</h2>
      <ProductRow products={filteredProducts} />
    </div>
  );
}

function ProductRow(props) {
  const { products } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.name}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
