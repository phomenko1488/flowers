import React, {useState} from 'react';
import {useEffect} from "react";
import {store} from "../redux/store";
import axios from "axios";
import {BASE_URL} from "../utils/consts";
import {Link} from "react-router-dom";
import {add, clearCart, remove, removeItem} from "../redux/actions/cart.actions";
import Popup from "./Popup";
import OrderConfirmPopup from "./OdrerConfirmedPopup";
import Header from "../components/Header";

const Checkout = (props) => {
    const [entity, setEntity] = useState({
        loading: false,
        phone: '',
        city: '',
        address: '',
        newPostNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        telegramUsername: '',
        comment: '',
        cart: {items: [], totalSum: 0},
        response: {id: '', stringId: ''},
        isPopupOpen: false
    })
    useEffect(() => {
        setEntity((prevState) => ({...prevState, cart: store.getState().cart, loading: false}))
    }, [])
    store.subscribe(() => setEntity((prevState) => ({...prevState, cart: store.getState().cart})))

    const closePopup = () => {
        setEntity((prevState)=>({...prevState,isPopupOpen: false}));
    };
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

    function handleOrder() {
        let order = {
            phone: entity.phone,
            city: entity.city,
            address: entity.address,
            newPostNumber: entity.newPostNumber,
            firstName: entity.firstName,
            lastName: entity.lastName,
            email: entity.email,
            telegramUsername: entity.telegramUsername,
            comment: entity.comment,
            cart: entity.cart
        }
        axios.post(`${BASE_URL}/orders`, order).then((res) => {
            return res.data
        }).then((data) => setEntity((prevState) => ({...prevState, response: data, isPopupOpen: true})))
    }

    return <div>
        <Header/>
        <div className="row">
            <div className="col-2"/>
            <div className="col-8 text-center">
                <div>
                    <h2>Оформление заказа</h2>
                    <h4>Товары</h4>
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
                    <div>
                        <label htmlFor="firstName">
                            Имя
                        </label>
                        <div>
                            <input type="text" value={entity.firstName} onChange={(e) => setEntity((prevState) => {
                                return {...prevState, firstName: e.target.value}
                            })}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastName">
                            Фамилия
                        </label>
                        <div>
                            <input type="text" value={entity.lastName} onChange={(e) => setEntity((prevState) => {
                                return {...prevState, lastName: e.target.value}
                            })}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone">
                            Номер
                        </label>
                        <div>
                            <input type="text" value={entity.phone} onChange={(e) => setEntity((prevState) => {
                                return {...prevState, phone: e.target.value}
                            })}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="city">
                            Город
                        </label>
                        <div>
                            <input type="text" value={entity.city} onChange={(e) => setEntity((prevState) => {
                                return {...prevState, city: e.target.value}
                            })}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address">
                            Адрес
                        </label>
                        <div>
                            <input type="text" value={entity.address} onChange={(e) => setEntity((prevState) => {
                                return {...prevState, address: e.target.value}
                            })}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="newPostNumber">
                            Номер отделения Новой Почты
                        </label>
                        <div>
                            <input type="text" value={entity.newPostNumber} onChange={(e) => setEntity((prevState) => {
                                return {...prevState, newPostNumber: e.target.value}
                            })}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <div>
                            <input type="text" value={entity.email} onChange={(e) => setEntity((prevState) => {
                                return {...prevState, email: e.target.value}
                            })}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="telegramUsername">
                            Telegram Username
                        </label>
                        <div>
                            <input type="text" value={entity.telegramUsername}
                                   onChange={(e) => setEntity((prevState) => {
                                       return {...prevState, telegramUsername: e.target.value}
                                   })}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="comment">
                            Коментарий
                        </label>
                        <div>
                            <input type="text" value={entity.comment} onChange={(e) => setEntity((prevState) => {
                                return {...prevState, comment: e.target.value}
                            })}/>
                        </div>
                    </div>
                    {entity.isPopupOpen && <OrderConfirmPopup onClose={closePopup} id={entity.response.stringId}/>}
                    <button onClick={() => handleOrder()} className={'btn btn-outline-dark'}>Заказать</button>
                </div>
            </div>
            <div className="col-2"/>
        </div>
    </div>
};

export default Checkout;