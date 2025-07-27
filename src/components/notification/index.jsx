import React from 'react'
import './index.css'
import arrowLeft from '../../assets/svgs/arrow-left.svg'
import { useNavigate } from 'react-router-dom'

function Notifications() {
  const nav = useNavigate()
  return (
    <div className='notification-div'>
      <div className="head-header">
        <img onClick={() => nav("/")} className='back-btn' src={arrowLeft} alt="" />
        <h1>Notification</h1>
      </div>
    </div>
  )
}

export default Notifications