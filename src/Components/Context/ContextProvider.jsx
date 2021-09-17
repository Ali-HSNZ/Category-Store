import { createContext, useContext, useState } from "react";

const Product = createContext()
const SetProduct = createContext()

const MenuCategorie = createContext()
const SetMenuCategorie = createContext()

const ContextProvider = ({children}) => {
    
    const [product,setProduct] = useState([   /* { id : 0 , Name : 'یخچال' } */ ])

    const [MenuCategories , setMenuCategorie] = useState([ /* { Categorie : " لوازم خانگی " } */ ])

    return ( 
        <>
        
            <Product.Provider value={product}>
                <SetProduct.Provider value={setProduct}>
                    <MenuCategorie.Provider value={MenuCategories}>
                        <SetMenuCategorie.Provider  value={setMenuCategorie}>
                            {children}
                        </SetMenuCategorie.Provider>
                    </MenuCategorie.Provider>
                </SetProduct.Provider>
            </Product.Provider>
        
        </>
    );
}




export default ContextProvider

export const Products =()=> useContext(Product) 
export const SetProducts =()=>{

    const SetProducts = useContext(SetProduct);
    const MyProducts = useContext(Product) 
    const categori = useContext(MenuCategorie)
    const setCategori = useContext(SetMenuCategorie)

    const AddCategori = (value)=> {

        // const Categorie = [...categori]

        // Categorie.push()

        setCategori([...categori,{id : categori.length,Categorie : value}])
    }
    
    const AddProduct = (InputCreateProduct,SelectOption)=> {



            // const Products = [...MyProducts]
            // Products.push({})
            // SetProducts(Products)

            SetProducts([...MyProducts,{id : Products.length,Name : InputCreateProduct,Categorie : SelectOption}])

    }

    return {AddCategori,AddProduct}
}
export const MenuCategories = ()=> useContext(MenuCategorie) 

