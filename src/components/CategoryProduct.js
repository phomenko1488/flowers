import React from 'react'
import {useCart} from "../hooks/useCart";
import {useNavigate} from "react-router";

const CategoryProduct = ({id, name, price, imageSrc}) => {
    const {cart, setCart} = useCart()
    const navigate = useNavigate()
    return <div className={'card'} style={{width: '18rem'}}>
        <img src={imageSrc} alt="" className={'card-img-top'}/>
        <div className={'card-title'}>{name}</div>
        <div>{price}</div>
        <button className={'btn btn-outline-primary'} onClick={() => navigate(`/product/${id}`)}>View</button>
    </div>
}
export default CategoryProduct