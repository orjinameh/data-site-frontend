import React, { useContext } from "react";
import "./index.css";
import { UserContext } from "../../../context/Context";
import { UserDataContext } from "../../../context/UserContext";

const NavBar = () => {
    const {setMenuBarState} = useContext(UserContext)
    const {userData} = useContext(UserDataContext)
    return (
        <div 
        className="pad nav-container">
            {/* <svg 
                onClick={()=>setMenuBarState('0%')}
                fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z">
                </path>
            </svg> */}
            <h3>Welcome, {localStorage.getItem('name')}</h3>
            <svg fill="#fff" viewBox="0 0 558 502" xmlns="http://www.w3.org/2000/svg" >
                <path d="M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"/>
            </svg>
        </div>
    );
}
 
export default NavBar;