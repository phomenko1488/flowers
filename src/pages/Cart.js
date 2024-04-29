import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import {store} from "../redux/store";
import {add, clearCart, remove, removeItem} from "../redux/actions/cart.actions";
import {Link} from "react-router-dom";
import Popup from "./Popup";

const Cart = () => {
    const [entity, setEntity] = useState({
        loading: true,
        cart: {items: [], totalSum: 0}
    })
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    useEffect(() => {
        setEntity((prevState) => ({...prevState, cart: store.getState().cart, loading: false}))
    }, [])
    store.subscribe(() => setEntity((prevState) => ({...prevState, cart: store.getState().cart})))


    function handleClearCart() {
        store.dispatch(clearCart())
    }

    function handleChangeQuantity(value, number) {
        let product = value.item
        let size = value.size
        let item = {
            product: product,
            size: size
        };
        if (number > 0)
            store.dispatch(add(item))
        else
            store.dispatch(remove(item))
    }

    function handleRemoveItemFromCart(value) {
        let product = value.item
        let size = value.size
        let item = {
            product: product,
            size: size
        };
        store.dispatch(removeItem(item))
    }

    return (
        <div>
            {entity.loading === true ? <div>Loading...</div> : <div>
                <Header/>
                <div>

                    {entity.cart.items.map((value, index, array) => {
                        return <div className={'d-inline-flex border rounded-2 p-2 w-100 justify-content-between'}
                                    key={index}>
                            <div className={'mx-1'}>{index + 1}.</div>
                            <div className={'mx-1'}><img width={50} height={50} src={value.item.photos[0]} alt=""/>
                            </div>
                            <div className={'mx-1'}><Link to={`/products/${value.item.id}`}>{value.item.name}</Link>
                            </div>
                            <div className={'mx-1'}>
                                {value.size}
                            </div>
                            <div className={'mx-1 d-inline-flex'}>
                                <div>
                                    <button className={'btn btn-outline-dark mx-1'}
                                            onClick={() => handleChangeQuantity(value, -1)}>-
                                    </button>
                                </div>
                                <div>{value.qty}</div>
                                <div>
                                    <button className={'btn btn-outline-dark mx-1'}
                                            onClick={() => handleChangeQuantity(value, 1)}>+
                                    </button>
                                </div>
                            </div>

                            <div className={'mx-1'}>
                                {value.item.price} $
                            </div>
                            <div className={'mx-1'}>
                                <button className={'btn btn-outline-dark'}
                                        onClick={() => handleRemoveItemFromCart(value)}>X
                                </button>
                            </div>
                        </div>
                    })}
                    <div className={'d-inline-flex justify-content-between w-100'}>
                        <div>Total Sum : {entity.cart.totalSum} $</div>
                        <button className={'btn btn-outline-dark'} onClick={() => handleClearCart()}>Clear</button>
                    </div>
                    <button className={'btn btn-outline-dark'} onClick={openPopup}>Order</button>
                    {isPopupOpen && <Popup onClose={closePopup} cart={entity.cart}/>}
                </div>
                <Footer/>
            </div>}

        </div>
    );

}

export default Cart