import Styles from "../Style Madule/Style.module.css"
import { Products} from "../Context/ContextProvider";

const Product = () => {

    const product = Products();

    return ( 
        <div className={Styles.ShowProduct}>

            <p style={{textAlign:"center"}}>نمایش محصول</p>
            <ul style={{ marginTop:'25px',overflowY:'scroll',height:'400px',width:"100%",display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',justifyContent:'space-between'}}>
                    {product.map((P)=> <li className={Styles.ShowProduct_product}><p> دسته بندی : {P.Categorie}</p><p> {P.Name}</p></li>)}
            </ul>
        
        </div>
    );
}
 
export default Product;