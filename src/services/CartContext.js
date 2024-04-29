import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({cart: [], setCart: null})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        setCart(cart)
    }, [])
    return <CartContext.Provider value={{cart, setCart}}>
        {children}
    </CartContext.Provider>
}