import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import styles from "./style.module.scss"

export const CartModal = ({ setCartList, cartList, setIsOpen, cartListFull, setCartListFull}) => {
   
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price
   }, 0)

   const removeAllProduct = (()=> {
      setCartListFull([])
      setCartList([])
   })

   return (
      <div role="dialog" className={styles.modal}>
         <div className={styles.modal__container}>
            <div className={styles.header__container}>
               <h2>Carrinho de compras</h2>
               <button aria-label="close" title="Fechar">
                  <MdClose size={21} onClick={() => setIsOpen(false)}/>
               </button>
            </div>
            <div className={styles.products__container}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} setCartList={setCartList} cartList={cartList} cartListFull={cartListFull} setCartListFull={setCartListFull}/>
                  ))}
               </ul>
            </div>
            <div className={styles.total__container}>
               <div>
                  <span className={styles.total}>Total</span>
                  <span className={styles.price}>{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={()=> {removeAllProduct()}}>Remover todos</button>
            </div>
         </div>
      </div>
   )
}
