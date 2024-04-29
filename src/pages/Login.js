// import React, {useContext, useEffect, useMemo, useState} from 'react'
// import {AuthContext} from "../services/AuthContext";
// import {useNavigate} from "react-router";
// import {useAuth} from "../hooks/useAuth";
//
// export const Login = () => {
//     const [loginData, setLoginData] = useState({username: "", password: "", triggered: false})
//     const correctData = {username: "111", password: "11"}
//     const {isLoggedIn, setIsLoggedIn} = useAuth()
//     const navigate = useNavigate()
//     useEffect(() => {
//         if (localStorage.getItem('isLoggedIn') === 'true')
//             navigate('/')
//     }, [])
//     useEffect(() => {
//         localStorage.setItem('isLoggedIn', isLoggedIn)
//         if (isLoggedIn)
//             navigate('/')
//         setLoginData((prevState)=>({...prevState,triggered: false}))
//     }, [loginData.triggered])
//
//     return <div>
//         <h1>Login</h1>
//         <label htmlFor="username">Username</label>
//         <br/>
//         <input value={loginData.username}
//                onChange={(e) => setLoginData((prev) => ({...prev, username: e.target.value}))}
//                id={"username"} type="text"/>
//         <br/>
//         <label htmlFor="password">Password</label>
//         <br/>
//         <input id={"password"} type="password" value={loginData.password}
//                onChange={(e) => setLoginData((prev) => ({...prev, password: e.target.value}))}/>
//         <div>Result : {isLoggedIn ? "Logged in " : "Login please"}</div>
//         <button onClick={() => {
//             setIsLoggedIn(correctData.username === loginData.username && correctData.password === loginData.password)
//             setLoginData((prev) => ({...prev, triggered: true}))
//         }
//         }>Login
//         </button>
//     </div>
// }