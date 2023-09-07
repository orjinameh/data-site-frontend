import React, { useContext } from "react";
import "./index.css";
import { UserContext } from "../../../context/Context";
import { UserDataContext } from "../../../context/UserContext";
import bell from "../../../assets/svgs/bell.svg";

const NavBar = () => {
    const {setMenuBarState} = useContext(UserContext)
    const {userData} = useContext(UserDataContext)
    return (
        <div className="pad nav-container">
            <h3>Welcome, {localStorage.getItem('name')}</h3>
            <img src={bell} alt="" />
        </div>
    );
}
 
export default NavBar;