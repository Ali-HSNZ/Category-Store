import Styles from "../Style Madule/Style.module.css"
import { AiFillShopping } from "react-icons/ai";
import Logo from '../../image/2.png'
import { Products } from "../Context/ContextProvider";

console.log(Logo)

const TopHeader = () => {
    const product = Products()
    return ( 
       
            <div className={Styles.Header_TopMenu}>
                    
                    <div className={Styles.Header_Cart}>
                        <AiFillShopping  size={'35px'} style={{alignItems:'center',display:'flex',justifyContent:"center"}}/>
                        <span className={Styles.Header_Cart_Count}>{product.filter(item => item.id >= 0).length}</span>
                    </div>
                    <nav ><a className={Styles.Header_Logo} href='#'>A-lex</a></nav>

            </div>
       
    );
}
 
export default TopHeader;