import React from "react";
import wifi from '../../../assets/svgs/wifi.svg'
import tv from '../../../assets/svgs/tv.svg'
import lightbulb from '../../../assets/svgs/lightbulb.svg'
import peopleLine from '../../../assets/svgs/people-line.svg'
import simCard from '../../../assets/svgs/simCard.svg'
import bulkSms from '../../../assets/svgs/bulkSms.svg'
import result from '../../../assets/svgs/result.svg'
import transaction from '../../../assets/svgs/transaction.svg'
export const objects1 = [
            {
                icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>,
                id:1,
                title:"Transactions"
            },
            {
                icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>,
                id:2,
                title:"Wallet summary"
            },
            {
                icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>,
                id:3,
                title:"Upgrade to Affiliate ₦2,000"
            },
            {
                icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>,
                id:4,
                title:"Upgrade to Topuser ₦5,000"
            },
        ]

const bo = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
            </svg>

export const objects2 = [
                            {
                                id:1,
                                icon: <img src={simCard} alt="" />,
                                title:"Airtime TopUp",
                                path:"",
                            },
                            {
                                id:2,
                                icon: <img src={wifi} alt="" />,
                                title:"Buy Data",
                                path:"/data-sub",
                            },
                            {
                                id:3,
                                icon: <img src={lightbulb} alt="" />,
                                title:"Electricity Bills",
                                path:"",
                            },
                            {
                                id:4,
                                icon: <img src={tv} alt="" />,
                                title:"Cable Subscription",
                                path:"",
                            },
                            {
                                id:5,
                                icon: <img src={bulkSms} alt="" />,
                                title:"Bulk SMS",
                                path:"",
                            },
                            {
                                id:6,
                                icon: <img src={result} alt="" />,
                                title:"Result Checker",
                                path:"",
                            },
                            {
                                id:7,
                                icon: <img src={peopleLine} alt="" />,
                                title:"My Referrals",
                                path:"",
                            },
                        ]