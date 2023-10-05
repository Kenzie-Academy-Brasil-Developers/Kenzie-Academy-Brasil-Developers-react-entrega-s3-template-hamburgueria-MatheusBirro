import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"

export const ProductList = ({ productList, setCartList, cartList, cartListFull, setCartListFull }) => {
   return (
      <ul className={styles.container__ul}>
         {productList.map((product,index) => (
            <ProductCard key={product.id} product={product} setCartList={setCartList} cartList={cartList} cartListFull={cartListFull} setCartListFull={setCartListFull} index={index}/>
         ))}
      </ul>
   )
}
