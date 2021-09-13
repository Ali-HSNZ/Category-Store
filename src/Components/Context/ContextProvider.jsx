import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Product = createContext()
const SetProduct = createContext()

const MenuCategorie = createContext()
const SetMenuCategorie = createContext()

const ContextProvider = ({children}) => {
    
    const [product,setProduct] = useState([
        {id : 0,Name : 'یخچال',Categorie : "لوازم خانگی"},
        {id : 1,Name : 'لباس کودک',Categorie : "پوشاک"},
        {id : 2,Name : 'کنسول بازی',Categorie : "لوازم دیجیتالی"},
        {id : 3,Name : 'آچار فرانسه',Categorie : "ابزار آلات"},
        {id : 4,Name : 'پنج‌شاخ',Categorie : "محصولات کشاورزی"},
      
    ])

    const [MenuCategories , setMenuCategorie] = useState([
        {Categorie : "لوازم خانگی"},
        {Categorie : "پوشاک"},
        {Categorie : "لوازم دیجیتالی"},
        {Categorie : "ابزار آلات"},
        {Categorie : "محصولات کشاورزی"},
    ])

    

    useEffect(()=>{
        console.log(product)
    },[product])

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

        const Categorie = [...categori]

        Categorie.push({id : Categorie.length,Categorie : value})
        setCategori(Categorie)
    }
    const AddProduct = (InputCreateProduct,SelectOption)=> {



            const Pr = [...MyProducts]
            Pr.push({id : Pr.length,Name : InputCreateProduct,Categorie : SelectOption})
            SetProducts(Pr)

    }

    return {AddCategori,AddProduct}
}
export const MenuCategories = ()=> useContext(MenuCategorie) 

