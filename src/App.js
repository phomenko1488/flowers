import logo from './logo.svg';
import './App.css';
import Index from "./pages/Index";
import {Route, Routes} from "react-router";
import Category from "./pages/Category";
import {useParams} from 'react-router-dom';
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import {Login} from "./pages/Login";


function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Index/>}/>
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/category/:category"} element={<GetCategory/>}/>
            <Route path={"/product/:product"} element={<GetProduct/>}/>
        </Routes>
    );
}

function GetCategory() {
    let {category} = useParams();
    return <Category id={category}/>
}

function GetProduct() {
    let {product} = useParams();
    return <Product id={product}/>
}

export default App;
