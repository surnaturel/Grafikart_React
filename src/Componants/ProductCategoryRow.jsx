import ProductRow from './ProductRow'; // Assurez-vous que le chemin est correct

function ProductCategoryRow(props) {
    const { category, products } = props;
    const filteredProducts = products.filter(product => product.category === category);
  
    return (
      <>
        <tr>
          <th colSpan="2"  style={{ background: 'lightgray', border: '1px solid #ccc' }}>{category}</th>
        </tr>
        <ProductRow products={filteredProducts} />
      </>
    );
  }


  export default ProductCategoryRow;