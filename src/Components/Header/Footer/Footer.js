import React from 'react'
import FLogo from '../../../images/footer logo.svg'
import Facebook from "../../../images/icon-facebook.svg"
import Twitter from '../../../images/icon-twitter.svg'
import Pinterest from '../../../images/icon-pinterest.svg'
import Instagram from '../../../images/icon-instagram.svg'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
        <section className='left-section'>
            <img src={FLogo} alt="Logo" />
        </section>
        <section className='middle-section'>
            <ul className='middle-lists'>
            <h3>Features</h3>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
        </section>
        <section className='middle-section'>
            <ul className='middle-lists resources'>
                 <h3>Resources</h3>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
        </section>
        <section className='middle-section'>
            <ul className='middle-lists'>
        <h3>Company</h3>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </section>
        <section className='right-section'>
            <ul className='right-lists'>
                <li>
                    <img className='social' alt='facebook' src={Facebook} />
                </li>
                <li>
                    <img className='social' alt="Twitter"src={Twitter} />
                </li>
                <li>
                   <img className='social' alt='Pinterest' src={Pinterest} />
                </li>
                <li>
                   <img className='social' alt='Instagram' src={Instagram}/>
                </li>
            </ul>
        </section>
    </div>
  )
}
