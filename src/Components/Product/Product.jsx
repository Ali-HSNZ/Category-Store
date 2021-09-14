import Styles from "../Style Madule/Style.module.css"
import { Products} from "../Context/ContextProvider";

const Product = () => {

    const product = Products();


    return ( 
        <div className={Styles.ShowProduct}>

            <p style={{textAlign:"center"}}>نمایش محصول</p>
            <ul style={{ marginTop:'25px',overflowY:'scroll',height:'400px',width:"100%",display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center'}}>
                    {product.length === 0 && <p style={{color:'red',fontWeight:'700'}}> محصولی ثبت نشده است</p>}
                    {product.map((P,index)=>  product.length === 0 ? <li>No data</li> : <li key={index} className={Styles.ShowProduct_product}><p> دسته بندی : {P.Categorie === "" || P.Categorie === ('دسته ( گروه ) مورد نظر را انتخاب کنید') ? "نامشخص" : P.Categorie }</p><p> {P.Name}</p></li>)}
            </ul>
        
        </div>
    );
}
 
export default Product;