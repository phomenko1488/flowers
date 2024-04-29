import React from 'react';
import '../Popup.css';
import {useNavigate} from "react-router";
import {store} from "../redux/store";
import {removeItem} from "../redux/actions/cart.actions";
import {Link} from "react-router-dom";

const Popup = ({onClose, cart}) => {
    const navigate = useNavigate()

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
        <div className="popup-container">
            <div className="popup text-center w-75">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <h2 className={'mb-2'}>Корзина</h2>
                    </div>
                    <div className="col-1">
                        <button className={'btn btn-outline-dark'} onClick={onClose}>X</button>
                    </div>
                </div>
                <p className={'mb-2'}>В корзине {cart.items.length} товаров на сумму {cart.totalSum} грн</p>
                {cart.items.map((value, index, array) => {
                    return <div className={'p-2 w-100'} key={index}>
                        <div className={'d-inline-flex p-2 justify-content-between w-100'}>
                            <div className={'d-inline-flex'}>
                                <button className={'btn btn-outline-dark'}
                                        onClick={() => handleRemoveItemFromCart(value)}>X
                                </button>
                                <div className={'mx-1'}><img width={50} height={50} src={value.item.photos[0]} alt=""/>
                                </div>
                                <div>
                                    <div className={'mx-1'}><Link
                                        to={`/products/${value.item.id}`}>{value.item.name}</Link>
                                        <div>
                                            Размер : {value.size}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div>{value.item.price} грн</div>
                        </div>
                        <hr/>

                    </div>
                })}
                <div className={'d-inline-flex justify-content-between w-100'}>
                    <button className={'btn btn-outline-dark'} onClick={onClose}>Продолжить покупки</button>
                    <button className={'btn btn-outline-dark'} onClick={() => navigate('/checkout')}>Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    )
        ;
};

export default Popup;