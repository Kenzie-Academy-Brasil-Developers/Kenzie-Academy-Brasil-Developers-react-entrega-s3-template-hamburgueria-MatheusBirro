import { MdDelete } from "react-icons/md"
import styles from "./style.module.scss"
export const CartItemCard = ({ product, setCartList, cartList, cartListFull, setCartListFull}) => {

   const removeProduct = () => {
      const newCartListFull = cartListFull.filter((e)=> {
         return e.id != product.id 
      })
      setCartListFull(newCartListFull)
      const newCartList = cartList.filter((e)=> {
         return e.id != product.id 
      })
      setCartList(newCartList)
   }

   return (
      <li className={styles.item__container}>
         <div>
            <img src={product.img} alt={product.name} />
            <div>
               <h3>{`${product.name}`}</h3>
               <span>{(product.price).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
            </div>
         </div>
         <button onClick={() => {removeProduct()}} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   )
}
