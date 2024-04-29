import React, {useEffect, useState} from 'react';
import Header from "../Header";
import axios from "axios";
import {BASE_URL} from "../../utils/consts";
import {Link} from "react-router-dom";

const Home = (props) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`${BASE_URL}/categories`).then((res) => {
            let data = res.data;
            console.log(data)
            setCategories(data)
            setLoading(false)
        })
    }, [])
    return <div>
        {loading ? <div>Loading</div> :
            <div>
                <Header/>
                <ul>
                    {categories.map((value, index, array) => {
                        return <li key={index}>
                            <Link to={`/categories/${value.id}`}>{value.name}</Link>
                        </li>
                    })}
                </ul>
                Home
            </div>}
    </div>
};

export default Home;