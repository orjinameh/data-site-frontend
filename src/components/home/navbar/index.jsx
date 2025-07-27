import React, { useContext, useState } from "react";
import login from "../../../assets/svgs/login.svg"
import usersvg from "../../../assets/svgs/user.svg"
import "./index.css";
import { UserContext } from "../../../context/Context";
import { UserDataContext } from "../../../context/UserContext";
import bell from "../../../assets/svgs/bell.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const {setMenuBarState} = useContext(UserContext)
    const {userData,setUserData} = useContext(UserDataContext)
    const [onModal, setOnModal] = useState(false)
    return (
        <div>
                {localStorage.getItem('jwtToken')?
                    <div className="pad nav-container">
                <div>
                    <div className="nav-div-cont">
                        <h3 onClick={()=>setOnModal(prev=>!prev)} className="circle">{localStorage.getItem('name')?localStorage.getItem('name')[0]:'e'}</h3>
                    </div>
                    <h3><span>Welcome,</span> {localStorage.getItem('name')?localStorage.getItem('name'):'Peter'}</h3>
                </div>
                <NavLink className={'activ'} to='/notification'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                    </svg>
                </NavLink>
                </div>:
            <div className='auths'>
            <Link to="/auth/signup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                Register</Link >
            <Link to="/auth/login">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 512 512"><path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                Login</Link >
            </div>}
            {onModal&&localStorage.getItem('jwtToken')?
            <div className="more-user">
                <NavLink  to="/auth/login" 
                onClick={()=>{localStorage.removeItem('name');
                setOnModal(prev=>!prev)
                localStorage.removeItem('jwtToken');
                setUserData({
                    user: '',
                    email: '',
                    transactions: [],
                    notifications: [],
                    balance: '',
                    plan: '',
                    refs: '',
                    totalFunding: '',
                    totalSpent: '',
                    refBonus: ''
                })
                }}>Sign Out</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 512 512">
                    <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                </svg>
            </div>:''}
        </div>
    );
}
 
export default NavBar;