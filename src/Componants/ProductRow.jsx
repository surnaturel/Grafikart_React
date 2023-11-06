function ProductRow(props) {
    const { products } = props;
    return (
      <>
        {products.map(product => (
          <tr key={product.name}>
            <td style={{ color: product.stocked ? 'black' : 'red' }}>{product.name}</td>
            <td style={{ color: product.stocked ? 'black' : 'red' }}>{product.price}</td>
          </tr>
        ))}
      </>
    );
  }

  export default ProductRow;