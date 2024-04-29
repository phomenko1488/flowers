import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../utils/consts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {add, clearCart, remove, updateCartItem} from "../redux/actions/cart.actions";
import {connect} from "react-redux";
import {store} from "../redux/store";
import MyCarousel from "../components/MyCarousel";
import Popup from "./Popup";


const Product = () => {
    let {id} = useParams();
    const [product, setProduct] = useState({
        collection: {
            id: 0,
            name: ''
        },
        name: '',
        description: '',
        id: 0,
        photos: [],
        sizeQuantities: [{size: 0, quantity: 0}],
        price: 0,
        inStock: true
    })
    const [entity, setEntity] = useState({
        loading: true,
        selectedSizeIndex: 0,
        cart: {items: [], totalSum: 0},
        isPopupOpen: false
    })
    const openPopup = () => {
        setEntity((prevState) => ({...prevState, isPopupOpen: true}));
    };

    const closePopup = () => {
        setEntity((prevState) => ({...prevState, isPopupOpen: false}));
    };
    useEffect(() => {
        axios.get(`${BASE_URL}/items/${id}`).then((res) => {
            let data = res.data;
            setProduct(data)
            setEntity((prevState) => ({...prevState, loading: false}))
        })
        setEntity((prevState) => ({...prevState, cart: store.getState().cart}))
    }, [id])
    store.subscribe(() => setEntity((prevState) => ({...prevState, cart: store.getState().cart})))

    function handleAddToCart() {
        let item = {
            product: product,
            size: product.sizeQuantities[entity.selectedSizeIndex].size
        };
        store.dispatch(add(item));
        openPopup()
    }

    function handleRemoveFromCart() {
        let item = {
            product: product,
            size: product.sizeQuantities[entity.selectedSizeIndex].size
        };
        store.dispatch(remove(item));
    }

    function handleClearCart() {
        store.dispatch(clearCart())
    }

    return (
        <div>
            <Header/>
            <div className="row">
                <div className="col-6">
                    <MyCarousel images={product.photos}/>
                </div>
                <div className="col-6">
                    {entity.loading ? <div>Loading</div> :
                        <div>
                            <div>Product id : {id}</div>

                            {product.inStock === true && product.sizeQuantities.length > 0 ?
                                <div>Selected size : {product.sizeQuantities[entity.selectedSizeIndex].size}</div> :
                                <div></div>}
                            <Link to={`/categories/${product.collection.id}`}>{product.collection.name}</Link>
                            <h1>{product.name}</h1>
                            <p>Id : {product.id}</p>
                            <p>Description : {product.description}</p>
                            <div>{product.price} $</div>
                            {product.inStock === true && product.sizeQuantities.length > 0 ? product.sizeQuantities.map((value, index, array) => {
                                return <div
                                    key={index}
                                    className={'mx-1 btn btn-outline-dark ' + (entity.selectedSizeIndex === index ? "active" : '')}
                                    onClick={() => {
                                        if (entity.selectedSizeIndex !== index)
                                            setEntity((prevState) => ({...prevState, selectedSizeIndex: index}))
                                    }}>
                                    <h4>{value.size}</h4>
                                    <h5>qty : {value.quantity}</h5>
                                </div>
                            }) : <div>Has not in stock</div>
                            }
                            <div>
                                <button disabled={product.inStock === false || product.sizeQuantities.length <= 0}
                                        onClick={(e) => handleAddToCart()}
                                        className={'btn btn-dark'}>Add to Cart
                                </button>
                                {entity.isPopupOpen && <Popup onClose={closePopup} cart={entity.cart}/>}
                            </div>
                            <div>
                                <button onClick={(e) => handleRemoveFromCart()} className={'btn btn-dark'}>Remove
                                </button>
                            </div>
                            <div>
                                <button onClick={(e) => handleClearCart()} className={'btn btn-dark'}>Clear Cart
                                </button>
                            </div>
                            <div>{entity.cart.items.map(item => {
                                return <div key={item.index}>{item.item.id}</div>
                            })}</div>
                            <div>
                                Total sum : {entity.cart.totalSum} $
                            </div>
                        </div>

                    }
                </div>
            </div>
            <Footer/>
            {/*<CategoryProduct id={'1'} name={'flower'} price={'228'}*/}
            {/*                 imageSrc={'https://www.flowers.ae/cdn/shop/files/Yourparagraphtext_26_b5a77cf2-ff65-4c62-a4c7-ae4df67b9c6c_2048x.png?v=1696067783'}/>*/}
        </div>
    );
}
const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, add)(Product);