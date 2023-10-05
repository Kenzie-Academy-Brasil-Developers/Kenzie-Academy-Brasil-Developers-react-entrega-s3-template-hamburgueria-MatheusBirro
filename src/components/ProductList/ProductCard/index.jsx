import { useEffect, useState } from "react"
import styles from "./style.module.scss"

export const ProductCard = ({ product, setCartList, cartList, cartListFull, setCartListFull, index}) => {

    const addProductCart = () => {
        const addProduct = [...cartListFull, product]
        setCartListFull(addProduct)
        if (!cartList.some((e) => e == product)) {
            const addProductCartList = [...cartList, product]   
            setCartList(addProductCartList)
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