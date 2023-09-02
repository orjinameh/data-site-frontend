import React, { useContext } from 'react';
import "./index.css";
import Modal from '../modal';
import { UserContext } from '../../context/Context';
import { createPortal } from 'react-dom';
import usersvg from "../../assets/svgs/user.svg"
import userninja from "../../assets/svgs/user-ninja.svg"
import login from "../../assets/svgs/login.svg"
import { Link, NavLink } from 'react-router-dom';
import { UserDataContext } from '../../context/UserContext';

export default function Sidebar() {
    const {menuBarState}=useContext(UserContext)
    const {userData,setUserData}=useContext(UserDataContext)
    const user = localStorage.getItem('name')
    const sidebar = 
    <div className="sidebar-div">
      <div className="profile-sidebar">
        <div className="pic"></div>
        {!user?<div className='auth'>
          <Link to="/auth/signup"><img src={usersvg} alt="" />Register</Link >
          <Link to="/auth/login"><img src={login} alt="" />Login</Link >
        </div>:
        <div className='user-details'>
          <div className="user-detail">
            <div className="user-details-photo">
              <img src={userninja} alt="" />
            </div>
            <div className="user-detail-details">
              <p>{localStorage.getItem('name')}</p>
              <p>balance: {}{userData.balance}</p>
            </div>
          </div>
          <NavLink  to="/auth/login" 
          onClick={()=>{localStorage.removeItem('name');
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
          })}}>Sign Out</NavLink>
        </div>}
      </div>
      <div className="user-menu">
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/data-sub'>Buy Data</NavLink>
        <NavLink to='/airtime'>Buy Airtime</NavLink>
        <NavLink to='/utilities'>Utilities Payment</NavLink>
        <NavLink to={'/fund'}>Fund Wallet</NavLink>
        <NavLink to='/pricing'>Pricing</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/faq'>F.A.Qs</NavLink>
      </div>
    </div>;
  return (
    <div>
        {menuBarState?createPortal(<Modal content={sidebar}/>,document.body):''}
    </div>
  );
};
