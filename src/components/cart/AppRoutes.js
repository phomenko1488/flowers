import React from 'react';
import {Route, Routes} from 'react-router'
import Home from "../home/Home";
import Category from "../../pages/Category";
import {ROUTES} from "../../utils/routes";
import Product from "../../pages/Product";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Search from "../../pages/Search";
import BookingForm from "../../pages/BookingPaymentForm";

const AppRoutes = (props) => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.CATEGORY} element={<Category/>}/>
        <Route path={ROUTES.PRODUCT} element={<Product/>}/>
        <Route path={ROUTES.CART} element={<Cart/>}/>
        <Route path={ROUTES.CHECKOUT} element={<Checkout/>}/>
        <Route path={ROUTES.SEARCH} element={<Search/>}/>
        <Route path={ROUTES.BOOKING} element={<BookingForm/>}/>
    </Routes>
);

export default AppRoutes;