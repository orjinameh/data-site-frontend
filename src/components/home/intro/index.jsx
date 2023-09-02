import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { UserContext } from "../../../context/Context";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../../context/UserContext";
import { ThreeCircles } from "react-loader-spinner";

const Intro = () => {
    const [isLoading,setIsLoading]=useState(false);
    const {firmName, backendBaseUrl, refLink} =  useContext(UserContext)
    const {userData,setUserData}=useContext(UserDataContext)
    useEffect(() => {
        const req = async () => {
            setIsLoading(true);
            const reqOpts = {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            }
            const request = await fetch(`${backendBaseUrl}/data/me/get`, reqOpts)
            const json = await request.json()
            setUserData(...json)
            json?setIsLoading(false):setIsLoading(true)
        };
        req();
    },[])
    return (
        <div className="intro-container">
            {isLoading?
            <ThreeCircles
            height="100"
            width="100"
            color=""
            wrapperStyle={{position:'fixed'}}
            wrapperClass="spinner-background"
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#52ab98"
            innerCircleColor="#2b6777"
            middleCircleColor="#52ab98"
          />
            :''}
            <h2 className="text-light">WELCOME TO {firmName}</h2>
            <p className="text-cont">Refer people to {firmName} and enjoy 1% of their first funding and 0.5% 0f there continous funding.</p>
            <p className="text-cont">Referral Link: {refLink} </p>
            <div className="center-s fund-wallet">
                <Link to={localStorage.getItem('jwtToken')?'/fund':'/auth/login'}>Fund Wallet</Link>
            </div>
        </div>
    );
}
 
export default Intro;