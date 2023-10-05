import Logo from "../../assets/Logo.svg"
import { MdShoppingCart } from "react-icons/md"
import styles from "./style.module.scss"

export const Header = ({setIsOpen, cartListFull}) => {
   return (
      <header className={styles.container__header}>
         <div>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <button onClick={()=>{setIsOpen(true)}}>
               <MdShoppingCart size={21} />
               <span>{cartListFull.length}</span>
            </button>
         </div>
      </header>
   )
}
