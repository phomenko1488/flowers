import React, {useContext, useEffect, useState} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useAuth} from "../hooks/useAuth";

const Index = () => {
    const [state, setState] = useState({isLoading: true})
    const [sideBarInfo, setSideBarInfo] = useState({
        firstElem: '',
        secondElem: ''
    })
    useEffect(() => {
        const timeout = setTimeout(() => {
            setState(() => ({...state, isLoading: false}))
        }, 1000)
        return () => clearTimeout(timeout)
    }, [])
    const {isLoggedIn, setIsLoggedIn} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn'));
    }, [])
    useEffect(() => {
        localStorage.setItem('isLoggedIn', 'false')
        if (!isLoggedIn)
            navigate('/login')
    }, [isLoggedIn])
    return <div>

        <Header/>
        <div>
            {isLoggedIn ? <div>
                <button onClick={() => setIsLoggedIn(false)}>Log out</button>
            </div> : <div><Link to={'/login'}>Login</Link></div>}
            <div>
                {isLoggedIn ? "Welcome" : "Please login"}
            </div>

            <div>
                {state.isLoading ? "is loading" : <SideBar sideBarInfo={sideBarInfo} setSideBarInfo={setSideBarInfo}/>}
            </div>
            <Content/>
        </div>
        <Footer/>
    </div>
}
export default Index