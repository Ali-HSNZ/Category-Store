
import Styles from "../Style Madule/Style.module.css"
import AddProduct from "../Add Product/AddProduct";
import AddCategorie from "../Add Categories/AddCategories";
import Product from "../Product/Product";

const App = () => {
    
    return(
        <div className={Styles.Products_Categories}>
            <Product/>
            <AddProduct/>
            <AddCategorie/>
            
        </div>
    );

}
 
export default App;