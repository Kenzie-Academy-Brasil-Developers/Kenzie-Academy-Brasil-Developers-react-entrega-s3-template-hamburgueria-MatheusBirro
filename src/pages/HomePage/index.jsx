import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { menuApi } from "../../services/api"
import styles from "./style.module.scss"

export const HomePage = ({setIsOpen, setCartList, cartList, cartListFull, setCartListFull }) => {
   const [productList, setProductList] = useState([])
   
   useEffect(()=> {
      const productListApi = async () => {
        const productListApi = await menuApi.get("/products")
        setProductList(productListApi.data)
      }
      productListApi()
   },[])

   return (
      <>
         <Header setIsOpen={setIsOpen} cartListFull={cartListFull}/>
         <main className={styles.main__container}>
            <ProductList productList={productList} setCartList={setCartList} cartList={cartList} cartListFull={cartListFull} setCartListFull={setCartListFull}/>
         </main>
      </>
   )
}
