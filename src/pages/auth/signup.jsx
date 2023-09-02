import React, { useContext, useState } from 'react'
import "./index.css"
import user from "../../assets/svgs/user.svg"
import { UserDataContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { ThreeCircles } from "react-loader-spinner";

export default function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { userData, setUserData } = useContext(UserDataContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { name, email, password, confirmPassword } = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ name: name, email: email, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch('https://datasite-h33s.onrender.com/data/auth/signup', requestOptions)
    const data = await response.json();
    console.log(data);
    const requestUserLoginOptions = {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const Log = await fetch('https://datasite-h33s.onrender.com/data/auth/login', requestOptions)
    const log = await Log.json();
    if (response.status === 200) {
      // Save jwt token to localStorage
      setUserData((prevState) => ({
        ...prevState,
        name: log.name,
        email: log.email,
        token: log.token,
      }));
      localStorage.setItem('jwtToken', (log.token));
      localStorage.setItem('name', (log.name));
      navigate('/');
    }

    const requestUserOptions = {
      method: 'POST',
      body: JSON.stringify({
        user: userData.user,
        email: userData.email,
        transactions: userData.transactions,
        notifications: userData.notifications,
        balance: userData.balance,
        plan: userData.plan,
        refs: userData.refs,
        totalFunding: userData.totalFunding,
        totalSpent: userData.totalSpent,
      }),
      headers: {
        'Authorization': `Bearer ${log.token}`,
        'Content-Type': 'application/json',
      }
    };
    const createUserData = await fetch('https://datasite-h33s.onrender.com/data/me/post', requestUserOptions)
    const UserDatas = await createUserData.json();
    UserDatas ? setIsLoading(false) : setIsLoading(true)
    console.log(UserDatas)
  };
  return (
    <div className='sign-up-page sign-div'>
      {isLoading ?
        <ThreeCircles
          height="100"
          width="100"
          color=""
          wrapperStyle={{ position: 'fixed' }}
          wrapperClass="spinner-background"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#52ab98"
          innerCircleColor="#2b6777"
          middleCircleColor="#52ab98"
        />
        : ''}
      <div className="reg">
        <img src={user} alt="" />
        <p>Register</p>
      </div>
      <div className="attent-reg">
        <p>Create account</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-reg">
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Enter your username" />
        </div>
        <div className="form-reg">
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email" />
        </div>
        <div className="form-reg">
          <input
            type="text"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter your password" />
        </div>
        <div className="form-reg">
          <input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            placeholder="Confirm your password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
