import Styles from "../Style Madule/Style.module.css"
import { SetProducts} from "../Context/ContextProvider";
import { useState } from "react";
import { useRef } from "react";



const AddCategorie = () => {
    
    const {AddCategori} = SetProducts();

    const [InputCreateCategories,setInputCreateCategories] = useState('')

    const ChangeCategorieInput =(e)=>{
        setInputCreateCategories(e.target.value)
    }

    const inputCategorie = useRef()

    return ( 
          <div className={Styles.AddCategories}>

                <p style={{textAlign:"center"}}>اضافه کردن دسته بندی</p>

                <div className={Styles.children}>

                    <div className={Styles.input_group}>
                        <p className={Styles.input_group_p} > : نام دسته بندی</p>

                        <input 
                            type='text' 
                            id={"Name"} 
                            className={Styles.input} 
                            onChange={(e)=>ChangeCategorieInput(e)}
                            ref={inputCategorie} 
                            placeholder={'نام دسته بندی خود را وارد کنید... (از 2 کاراکتر)'}
                        />

                    </div>

               
                </div>
                
                <button className={Styles.button_submit} onClick={()=>{return setInputCreateCategories("") , inputCategorie.current.value = "" , InputCreateCategories.length > 1 && AddCategori(InputCreateCategories)}}>
                    تایید
                </button>        
                   
                       
                

            </div>


    );
}
 
export default AddCategorie;