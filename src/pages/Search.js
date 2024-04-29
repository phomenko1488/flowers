import React from 'react';
import {useParams} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageableItems from "../components/PageableItems";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../utils/consts";

const Search = (props) => {
    function useQuery() {
        const {search} = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    const navigate = useNavigate()
    const query = useQuery();
    const searchQuery = query.get("query")
    const selectedBrands = query.get("brands")
    const selectedCollections = query.get("collections")
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
    const [brands, setBrands] = useState({brands: [], selectedBrands: []});
    const [collections, setCollections] = useState({collections: [], selectedCollections: []});

    useEffect(() => {
        axios.get(`${BASE_URL}/brands`).then(res => {
            setBrands((prevState) => ({...prevState, brands: res.data}))
        }).then(() => {
            if (selectedBrands !== null)
                if (selectedBrands?.trim() !== '') {
                    setBrands((prevState) => ({...prevState, selectedBrands: selectedBrands.split(',').map(Number)}))
                } else
                    setBrands((prevState) => ({...prevState, selectedBrands: []}))
            else
                setBrands((prevState) => ({...prevState, selectedBrands: []}))
        })
        axios.get(`${BASE_URL}/categories`).then(res => {
            setCollections((prevState) => ({...prevState, collections: res.data}))
        }).then(() => {
            if (selectedCollections !== null)
                if (selectedCollections?.trim() !== '') {
                    setCollections((prevState) => ({
                        ...prevState,
                        selectedCollections: selectedCollections.split(',').map(Number)
                    }))
                } else
                    setCollections((prevState) => ({...prevState, selectedCollections: []}))
            else
                setCollections((prevState) => ({...prevState, selectedCollections: []}))
        })
        let qbrands = brands.selectedBrands.join(',')
        let qcollections = collections.selectedCollections.join(',')
        axios.get(`${BASE_URL}/items/search?brand=${qbrands}&collectionId=${qcollections}&query=${searchQuery}&page=${page}`).then((res) => {
            let data = res.data;
            console.log(data);
            setPageable(data);
            setLoading(false);
        });
    }, [query]);

    function handleFilter() {
        let qbrands = brands.selectedBrands.join(',')
        let qcollections = collections.selectedCollections.join(',')
        navigate(`/search?brands=${qbrands}&collections=${qcollections}&query=${searchQuery}`)
    }

    return <div>
        {
            loading === true ? <div>Loading...</div> : <div>
                <Header/>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-1">
                        <div className={'w-100 p-1'}>
                            Collections
                            {collections.collections.map(value => {
                                return <div style={{cursor: 'pointer'}} onClick={(e) => {
                                    let collections1 = collections.selectedCollections;
                                    if (collections1.includes(Number(value.id)))
                                        collections1.splice(collections1.indexOf(Number(value.id)), 1)
                                    else
                                        collections1.push(Number(value.id))
                                    setCollections((prevState) => ({...prevState, selectedCollections: collections1}))
                                }
                                }><input checked={collections.selectedCollections.includes(Number(value.id))}
                                         type={'checkbox'}/>{value.name}
                                </div>
                            })}
                        </div>
                        <div className={'w-100 p-1'}>
                            Brands
                            {brands.brands.map(value => {
                                return <div style={{cursor: 'pointer'}} onClick={(e) => {
                                    let brands1 = brands.selectedBrands;
                                    if (brands1.includes(Number(value.id)))
                                        brands1.splice(brands1.indexOf(Number(value.id)), 1)
                                    else
                                        brands1.push(Number(value.id))
                                    setBrands((prevState) => ({...prevState, selectedBrands: brands1}))
                                }
                                }><input checked={brands.selectedBrands.includes(Number(value.id))}
                                         type={'checkbox'}/>{value.name}
                                </div>
                            })}
                        </div>
                        <button onClick={() => handleFilter()} className={'w-100 btn btn-outline-dark'}>Filter</button>
                    </div>
                    <div className="col-8">
                        <h4>Результаты по запросу {searchQuery}</h4>
                        <PageableItems
                            URL={`/search?brands=${brands.selectedBrands.join(',')}&collections=${collections.selectedCollections.join(',')}&query=${searchQuery}&`}
                            pageable={pageable}/>
                    </div>
                    <div className="col-2"></div>
                </div>
                <Footer/>
            </div>
        }
    </div>
};

export default Search;