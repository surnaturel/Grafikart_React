
import ProductCategoryRow from './ProductCategoryRow'; // Assurez-vous que le chemin est correct


function ProductTable(props) {
    const { products } = props;
    const categories = [...new Set(products.map(product => product.category))];
  
    return (
      <table style={{ width: '100%', border: '1px solid #ccc' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc' }}>Nom</th>
            <th style={{ border: '1px solid #ccc' }}>Prix</th>
          </tr>
        </thead>
        <tbody> 
          {categories.map(category => (
            <ProductCategoryRow key={category} category={category} products={products} />
          ))}
        </tbody>
      </table>
    );
}
  export default ProductTable;