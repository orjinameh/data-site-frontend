import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { UserContext } from "../../../context/Context";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../../context/UserContext";
import { ThreeCircles } from "react-loader-spinner";
import { ContComp } from "../content/__comp";

const Intro = () => {
    const icon =<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                </svg>
    const [isLoading,setIsLoading]=useState(false);
    const {firmName, backendBaseUrl, refLink} =  useContext(UserContext)
    const {userData,setUserData}=useContext(UserDataContext)
    useEffect(() => {
        if (localStorage.getItem('jwtToken')) {
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
            }
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
            {/* <h2 className="text-light">WELCOME TO {firmName}</h2>
            <p className="text-cont">Refer people to {firmName} and enjoy 1% of their first funding and 0.5% 0f there continous funding.</p>
            <p className="text-cont">Referral Link: {refLink} </p> */}
            {/* <div className="center-s fund-wallet"> */}
                {/* <div className="home-content1 home-content2"> */}
                    {/* <div className="obj-half-icon icon-2">
                        {icon}
                    </div> */}
                    <div className="obj-cont-comp-title">
                        <p>Wallet balance</p>
                        <p>NGN {localStorage.getItem('jwtToken')?userData.balance:'0'}</p>
                        <Link to={localStorage.getItem('jwtToken')?'/fund':'/auth/login'}>Fund Wallet +</Link>
                    </div>
                {/* </div> */}
                {/* <ContComp icon={icon} title="Wallet Balance" text={`₦${userData.balance}`}/> */}
            {/* </div> */}
        </div>
    );
}
 
export default Intro;