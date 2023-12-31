import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import arrowLeft from '../../assets/svgs/arrow-left.svg'
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../context/UserContext';

function Data() {
  const [reqresponse,setReqresponse] = useState(null)
  const {userData} = useContext(UserDataContext)
  const navigate = useNavigate();
  const [network,setNetwork] = useState(null);
  const [number,setNumber] = useState(null);
  const [amount,setAmount] = useState(null);
  const api = `https://smartrecharge.ng/api/v2/datashare/?api_key=0rp40z0w4srflnkf97hnav6nlqv9p31kwv86s9l&product_code=data_share_${network}_${amount}&phone=${number}`
  useEffect(()=>{
      localStorage.getItem('name')?'':navigate('/auth/login')
  })
  const handSubmit = (e)=>{
    e.preventDefault()
    setReqresponse('balance not enough!')
    setTimeout(()=>
    {
      setReqresponse(null)
      navigate('/')
    }, 1000)
    // alert('balance not enough!');
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const requestOptions = {
      mode:'no-cors',
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      }
    }
    const response = await fetch(api, requestOptions);
    const jsonRes = await response.text();
    console.log(response)
  }
  return (
    <form onSubmit={userData.balance>=amount?handleSubmit:handSubmit} className='data-form'>
      <div className="head-header">
        <img onClick={() => navigate("/")} className='back-btn' src={arrowLeft} alt="" />
        <h1>Buy Data</h1>
      </div>
        <header>Network</header>
        <select name="network" onChange={(e)=>setNetwork(e.target.value)} id="">
            <option value="nuetral">-------</option>
            <option value="mtn_corporate_data">mtn</option>
            <option value="airtel_corporate_data">airtel</option>
            <option value="glo_corporate_data">glo</option>
            <option value="9mobile_corporate_data">9mobile</option>
        </select>
        <header>mobile number</header>
        <input type="number" onChange={(e)=>setNumber(e.target.value)} name="mobile-number" id="" />
        <header>amount</header>
        <select name="amount" id="" onChange={(e)=>setAmount(e.target.value)}>
          <option value="neutral">--------</option>
          <option value="100mb_7days">100mb_7days(&#8358;
            {network=="mtn_corporate_data"?'120':''}
            {network=="airtel_corporate_data"?'120':''}
            {network=="glo_corporate_data"?'120':''}
            {network=="9mobile_corporate_data"?'120':''}
          )
          </option>
          <option value="300mb_7days">300mb_7days(&#8358;
            {network=="mtn_corporate_data"?'120':''}
            {network=="airtel_corporate_data"?'120':''}
            {network=="glo_corporate_data"?'120':''}
            {network=="9mobile_corporate_data"?'120':''}
          )
          </option>
          <option value="500mb_30days">500mb_30days(&#8358;
            {network=="mtn_corporate_data"?'120':''}
            {network=="airtel_corporate_data"?'120':''}
            {network=="glo_corporate_data"?'120':''}
            {network=="9mobile_corporate_data"?'120':''}
          )
          </option>
          <option value="1gb_30days">1gb_30days(&#8358;
            {network=="mtn_corporate_data"?'120':''}
            {network=="airtel_corporate_data"?'120':''}
            {network=="glo_corporate_data"?'120':''}
            {network=="9mobile_corporate_data"?'120':''}
          )
          </option>
          <option value="2gb_30days">2gb_30days(&#8358;
            {network=="mtn_corporate_data"?'120':''}
            {network=="airtel_corporate_data"?'120':''}
            {network=="glo_corporate_data"?'120':''}
            {network=="9mobile_corporate_data"?'120':''}
          )
          </option>
          <option value="5gb_30days">5gb_30days(&#8358;
            {network=="mtn_corporate_data"?'120':''}
            {network=="airtel_corporate_data"?'120':''}
            {network=="glo_corporate_data"?'120':''}
            {network=="9mobile_corporate_data"?'120':''}
          )
          </option>
          <option value="10gb_30days">10gb_30days(&#8358;
            {network=="mtn_corporate_data"?'120':''}
            {network=="airtel_corporate_data"?'120':''}
            {network=="glo_corporate_data"?'120':''}
            {network=="9mobile_corporate_data"?'120':''}
          )
          </option>
          <option value="15gb_30days">15gb_30days(&#8358;
            {network=="mtn_corporate_data"?'120':''}
            {network=="airtel_corporate_data"?'120':''}
            {network=="glo_corporate_data"?'120':''}
            {network=="9mobile_corporate_data"?'120':''}
          )
          </option>
          <option value="20gb_30days">20gb_30days(&#8358;
            {network=="mtn_corporate_data"?'120':''}
            {network=="airtel_corporate_data"?'120':''}
            {network=="glo_corporate_data"?'120':''}
            {network=="9mobile_corporate_data"?'120':''}
          )
          </option>
        </select>
        <button type="submit">Buy Now</button>
        <div className="resp">{reqresponse}</div>
    </form>
  )
}

export default Data