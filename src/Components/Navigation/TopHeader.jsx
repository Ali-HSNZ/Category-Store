import Styles from "../Style Madule/Style.module.css"
import { AiFillShopping } from "react-icons/ai";
import { Products } from "../Context/ContextProvider";


const TopHeader = () => {

    const product = Products()

    return ( 
       
            <div className={Styles.Header_TopMenu}>
                    
                    <div className={Styles.Header_Cart}>
                        <AiFillShopping  size={'35px'} style={{alignItems:'center',display:'flex',justifyContent:"center"}}/>
                        <span className={Styles.Header_Cart_Count}>{product.filter(item => item.id >= 0).length}</span>
                    </div>
                    <nav ><a className={Styles.Header_Logo} href='http://localhost:3001/'>A-lex</a></nav>

            </div>
       
    );
}
 
export default TopHeader;