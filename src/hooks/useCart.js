import {useContext} from "react";
import {CartContext} from "../services/CartContext";

export function useCart() {
    return useContext(CartContext);
}