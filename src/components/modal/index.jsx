import React, { useContext } from 'react'
import './index.css'
import { UserContext } from '../../context/Context';

export default function Modal({content}) {
  const {setMenuBarState, menuBarState}  = useContext(UserContext);
  return (
    <div className='modal-pa-div' style={{left:`${menuBarState}`}}>
        <div className="modal-background" 
        onClick={()=>setMenuBarState('-120%')}>
        </div>
        <div className="content">
            {content}
        </div>
    </div>
  )
}
