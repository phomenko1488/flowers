import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from '../utils/consts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useLocation} from 'react-router';
import PageableItems from "../components/PageableItems";

const Category = (props) => {
    let {id} = useParams();

    function useQuery() {
        const {search} = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    let query = useQuery();
    let page = query.get("page");
    if (!page || isNaN(page)) {
        page = 0;
    } else {
        page = parseInt(page);
    }
    const [pageable, setPageable] = useState({
        content: [],
        empty: false,
        first: true,
        last: true,
        number: 0,
        numberOfElements: 2,
        pageable: {pageNumber: 0, pageSize: 25, sort: {}, offset: 0, paged: true},
        size: 25,
        sort: {empty: true, unsorted: true, sorted: false},
        totalElements: 2,
        totalPages: 1
    });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`${BASE_URL}/categories/${id}/items?page=${page}`).then((res) => {
            let data = res.data;
            console.log(data);
            setPageable(data);
            setLoading(false);
        });
    }, [id, page]);
    return (
        <div>
            <Header/>
            {loading ? <div>Loading</div> :
                <div>
                    <p>Category id : {id}</p>
                    <PageableItems pageable={pageable} URL={`/categories/${id}?`}/>
                </div>}
            <Footer/>
        </div>
    );
};

export default Category;
