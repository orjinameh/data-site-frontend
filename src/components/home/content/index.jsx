import React, { useContext, useEffect } from "react";
import {objects1, objects2} from "./__divObjects";
import {ContComp,ContComp2,ContComp3} from "./__comp";
import "./index.css"
import { UserDataContext } from "../../../context/UserContext";
import { Link } from "react-router-dom";

const HomeContent = () => {
    const {userData}=useContext(UserDataContext)
    useEffect(()=>{
        
    },[userData])
    const icon =<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                </svg>
    return (
        <div className="home-div-div">
            {userData.name}
            <div className="todo-container">
                {
                    objects2.map((obj)=>
                        <Link key={obj.id} to={obj.path}>
                            <ContComp3 icon={obj.icon} title={obj.title}/>
                        </Link>
                    )
                }
            <div className="transaction-stats-container">
                <div className="stats-title">
                    TRANSACTION STATISTICS
                </div>
                <div className="stats-items">
                    {icon}
                    <div>
                        <p>WALLET BALANCE</p>
                        <p>&#8358;{userData.balance}</p>
                    </div>
                </div>
                <div className="stats-items">
                    {icon}
                    <div>
                        <p>TOTAL FUNDING</p>
                        <p>&#8358;{userData.totalFunding}</p>
                    </div>
                </div>
                <div className="stats-items">
                    {icon}
                    <div>
                        <p>TOTAL SPENT</p>
                        <p>&#8358;{userData.totalSpent}</p>
                    </div>
                </div>
            </div>
            </div>
            <ContComp2 title="Notifications" text="Paystack Payment successful you account has been credited with the sum of ₦142" button="all messages"/>
            <ContComp2 title="FAQs:" text="Please go through them to have to have a better knowledge of this platform" button="?FAQs"/>
            <ContComp2 title="Support Team:" text="Have anything to say to us? Please contact our Support Team on Whatsapp" button="whatsapp us"/>
        </div>
    );
}

export default HomeContent;