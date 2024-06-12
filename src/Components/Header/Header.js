import React from 'react'
import Logo from '../../images/logo.svg'
import Menu from '../../images/menu-outline.svg'
import { useState, useEffect} from 'react'
import './Header.css'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 900) {
                setMenuOpen(false);  // Close the menu on larger screens
            }
        };
        window.addEventListener('resize', handleResize);
        // handleResize(); // Initial check
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

    // const displayStyle = {
    //     display: menuOpen || window.innerWidth > 900 ? 'flex' : 'none'
    // };

  return (

        <div className="header">
           
            <article> 
            <img src={Logo} className="logo"/>
            <nav className="nav-bar" style={{display: menuOpen || windowWidth > 900 ? "flex" : "none"}}>
            {/* <img src={Logo} className="logo"/> */}

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
            
            {/* <img src={Menu} 
            className="burger"
            alt='Menu'
            style={menuStyle}
            onClick={() => {
                console.log("Before state change:", menuOpen);
                setMenuOpen(!menuOpen);
                console.log("After state change:", menuOpen);
                // setMenuOpen(prevMenuOpen => !prevMenuOpen);
                // menuOpen = !menuOpen;
            }}
             /> */}
             <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="burger" 
                viewBox="0 0 512 512" 
                style={menuStyle} 
                onClick={() => {
                    // console.log("Before state change:", menuOpen);
                    // setMenuOpen(!menuOpen);
                    // console.log("After state change:", menuOpen);
                   setMenuOpen(prevMenuOpen => !prevMenuOpen)
                }}
            >
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352"/>
            </svg>
           
        </div>

  )
}

