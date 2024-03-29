import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import styles from "./style.module.scss"

export const ProductCard = ({ product, setCartList, cartList, cartListFull, setCartListFull, index}) => {

    const addProductCart = () => {
        const addProduct = [...cartListFull, product]
        setCartListFull(addProduct)
        
        if (!cartList.some((e) => e.id == product.id)) {
            const addProductCartList = [...cartList, product]   
            setCartList(addProductCartList)
            toast("Produto adicionado ao carrinho")
        }else{
            toast.error("Este produto não pode ser adicionado novamente")
        }
    }

    return (
        <li className={`${styles.container__card} ${index === 0? (styles.container__first_card) : null}`}>
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{`${product.name}`}</h3>
                <span className={styles.card__category}>{product.category}</span>
                <span className={styles.card__price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button onClick={() => { addProductCart() }}>Adicionar</button>
            </div>
        </li>
    )
}