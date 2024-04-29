import {Link} from "react-router-dom";
import {ROUTES} from "../utils/routes";
import React, {useMemo, useState} from 'react';
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {store} from "../redux/store";

const Header = (props) => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    function handleKeyDown(e) {
        if (e.key === 'Enter')
            search()
    }

    function search() {
        if (query.trim().length > 0)
            return () => navigate(`/search?query=${query.trim()}`);
    }

    const [cart, setCart] = useState({
        cart: {items: [], totalSum: 0},
    })
    useEffect(() => {
        setCart(() => ({cart: store.getState().cart}))
    }, [])
    store.subscribe(() => setCart(() =>({cart: store.getState().cart})))


    return <div>
        <div className={'w-100 d-inline-flex justify-content-between p-2'}>
            <div className="logo">
                Page
            </div>
            <div className="links my-2 d-inline-flex justify-content-around w-50">
                <Link to={ROUTES.HOME}>Home</Link>
            </div>
            <div>
                <Link to={ROUTES.CART}>{cart.cart.items.length}</Link></div>
            <div>
                <div className="input-group">

                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                           onChange={(e) => setQuery(e.target.value)}
                           onKeyDown={(e) => handleKeyDown(e)}
                           value={query} aria-describedby="search-addon"/>
                    <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init
                            onClick={search()}>search
                    </button>
                </div>
            </div>
        </div>
    </div>
};

export default Header;