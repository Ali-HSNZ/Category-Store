import {useState } from "react";
import Styles from "../Style Madule/Style.module.css"
import { SetProducts ,MenuCategories} from "../Context/ContextProvider";
const AddProducts = () => {

    const {AddProduct} = SetProducts();
    const categoris = MenuCategories()

// InputCreateCategories

    const [InputCreateProduct,setInputCreateProduct] = useState('')
    const [SelectOption,setSelectOption] = useState('')



    return ( 

            <div className={Styles.AddProducts}>

                <p style={{textAlign:"center"}}>اضافه کردن محصول</p>
                <div className={Styles.children}>

                    <div className={Styles.input_group}>
                        <p className={Styles.input_group_p} > : نام محصول</p>
                        <input 
                            type='text'
                            id={"Name"} 
                            className={Styles.input}
                          
                            onChange={ e => setInputCreateProduct(e.target.value)}
                            placeholder="نام محصول خود را وارد کنید ( از 2 کاراکتر)"
                        />

                    </div>
                    
                    <div className={Styles.input_group}>
                        <p className={Styles.input_group_p} >دسته بندی</p>
                        <select className={Styles.input} onChange={ e => setSelectOption(e.target.value)}>

                            <option>دسته ( گروه ) مورد نظر را انتخاب کنید</option> 

                            {categoris.map((P,index)=> <option key={index}>{P.Categorie}</option>)}
                            

                        </select>
                    </div>
                </div>
               
                <button className={Styles.button_submit} onClick = { ()=>{ return setInputCreateProduct("") , InputCreateProduct.length > 1 &&  AddProduct(InputCreateProduct,SelectOption)}}>تایید</button>
    
            </div>
        
    );
}
 
export default AddProducts;