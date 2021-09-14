import Styles from "../Style Madule/Style.module.css"
import {MenuCategories} from "../Context/ContextProvider";
const Menu = () => {

        const categori = MenuCategories();

        return ( 

                <div className={Styles.Header_Menu}>
                        {categori.length === 0 && <p style={{color : 'red' , fontWeight : '700'}}>دسته بندی ( گروه ) ثبت نشده است</p>}
                        {categori.map((P,index) => {return   <a href='#' key={index}>{P.Categorie}</a>})}
                </div>

        );

}
 
export default Menu;