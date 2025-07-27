import { PaystackButton } from "react-paystack";
import  "./index.css"
import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext, UserDataProvider } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/Context";
import { ThreeCircles } from "react-loader-spinner";

function PaystackFund() {
    const navigate = useNavigate();
    const [isLoading,setIsLoading]=useState(false);
    const {userData, setUserData} = useContext(UserDataContext)
    useEffect(()=>{
        setEmail(localStorage.getItem('email'))
        localStorage.getItem('name')?'':navigate('/auth/login')
    })
    const {backendBaseUrl}=useContext(UserContext)
    const [amount, setAmount] = useState('')
    const [email, setEmail] = useState(localStorage.getItem('email'))
    const charge = amount*.03
    const total= (+amount+charge)
    const paystackAmount=total*100
    const newAmount = +amount + userData.balance
    const publicKey="pk_live_69904fd18ac3114e5df7953af0400ebd377cd451"
    // const publicKey="pk_live_69904fd18ac3114e5df7953af0400ebd377cd451"
    const componentProps = {
        email,
        amount:paystackAmount,
        publicKey,
        text: "Pay Now",
        onSuccess: () =>{
            setIsLoading(true);
            setUserData(
                {
                    ...userData,
                    balance: newAmount
                }
            );
            navigate('/');
            const fetchData= async()=>{
                const requestUserOptions = {
                method: 'PATCH',
                body: JSON.stringify({
                    balance: newAmount
                }),
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
                    'Content-Type': 'application/json',
                }
                };
                const updateUserData = await fetch(`${backendBaseUrl}/data/me/patch`, requestUserOptions)
                const UserDatas = await updateUserData.json();
                UserDatas?setIsLoading(false):setIsLoading(true)
                // console.log(UserDatas)
            }
            fetchData();
        },
        onClose: () => {alert("Wait! Don't leave :(");
        navigate('/');
    },
      } 
      return (
        <div className="paystack-div">
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
            <h2>Fund account with paystack</h2>
            <form onSubmit={(e)=>e.preventDefault} className="myform">
                <div className="form-group">
                    <label htmlFor="id_amount" className=" requiredField">
                        Amount<span className="asteriskField">*</span>
                    </label>
                    <div className="">
                        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" min="0.0" max="2450.0" step="any" className="numberinput form-control" required="" />
                    </div>
                    {/* <div className="">
                        <label>email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" step="any" className="numberinput form-control" required="" />
                    </div> */}
                </div>
                <div className="container">
                    <p>Transaction charge <span className="printchatbox">₦{charge}</span></p>
                    <p>Total <span className="charge">₦{total}</span></p>
                    <p>new bal will be: <span className="charge">₦{newAmount}</span></p>
                </div>
            </form>
                <PaystackButton
                    // {text:"Make Payment",
                    // email="user@example.com"
                    // amount={total}
                    // publicKey="pk_test_6481987c1027c69b1887a82659baf6cf7dd9ff58"
                    // onSuccess: () =>alert("Thanks for doing business with us! Come back soon!!")}
                    {...componentProps}
                />
        </div>
    )
}

export default PaystackFund