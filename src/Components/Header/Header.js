import React from 'react'
import Logo from '../../images/logo.svg'
import { useState, useEffect} from 'react'
import './Header.css'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 900) {
                setMenuOpen(false); 
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        console.log("Menu state changed:", menuOpen);
    }, [menuOpen]);

    const menuStyle = {
        width: '45px',
        marginRight: '20px',
        cursor: 'pointer',
        color: 'gray',
    };


  return (

        <div className="header">
           
            <article> 
            <img src={Logo} alt="logo" className="logo"/>
            <nav className="nav-bar" style={{display: menuOpen || windowWidth > 900 ? "flex" : "none"}}>

                 <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </nav>
            </article>
            <div className='buttons'style={{display: menuOpen || windowWidth > 900 ? "flex" : "none"}}>
                <button className='btn-left'>Login</button>
                <button className='btn-right'>Sign Up</button>
            </div>
            
           
             <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="burger" 
                viewBox="0 0 512 512" 
                style={menuStyle} 
                onClick={() => {
                   setMenuOpen(prevMenuOpen => !prevMenuOpen)
                }}
            >
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352"/>
            </svg>
           
        </div>

  )
}

