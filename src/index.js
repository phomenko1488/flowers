import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./components/cart/AppRoutes";
import '../src/styles/index.css'
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import BookingForm from "./pages/BookingPaymentForm";
import XBetPayment from "./pages/XBetPayment";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<Provider store={store}>*/}
        {/*    <PersistGate loading={null} persistor={persistor}>*/}
        {/*        <Router>*/}
        {/*            <AppRoutes/>*/}
        {/*        </Router>*/}
        {/*    </PersistGate>*/}
        {/*</Provider>*/}
        <XBetPayment/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
