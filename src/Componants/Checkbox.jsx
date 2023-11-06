
function Checkbox(props) {
    const { setFilteredProducts, products } = props;
  
    const productChange = (e) => {
      const isChecked = e.target.checked;
      console.log(isChecked);
      if (isChecked) {
        setFilteredProducts(products.filter((product) => product.stocked === false));
      } else {
        setFilteredProducts(products); // Rétablit la liste originale de produits
      }
    };
  
    return (
      <div>
        <input onChange={productChange} type="checkbox" name="checkbox" id="checkbox" />
        N'afficher que les produits en stock
      </div>
    );
  }



  export default Checkbox;