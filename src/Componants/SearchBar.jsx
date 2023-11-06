import Checkbox from './Checkbox'; // Assurez-vous que le chemin est correct

function SearchBar(props) {
    return (
      <div>
        <input type="text" placeholder="Search..." />
        <Checkbox setFilteredProducts={props.setFilteredProducts} products={props.products} />
      </div>
    );
  }
  
  export default SearchBar;