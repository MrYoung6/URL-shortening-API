import React from 'react'
import "./TopInfo.css"
import Desk from'../../../images/illustration-working.svg'

export default function TopInfo() {
  return (
    <div className='top'>
        <div className='left-top'>
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button>Get Started</button>
        </div>
        <img  alt='worker' src={Desk}/>
    </div>
  )
}
