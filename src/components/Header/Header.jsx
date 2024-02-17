import React, { useEffect, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logo from './Logo.png'

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isMob,setIsmob] = useState(false)

    
    const mobHandleChange = ()=>{
        setIsmob(!isMob)
    }

    const mobHandleClose = () =>{
        setIsmob(false)
    }

    const closeHandleChange = () => {
        setIsOpenMenu(false)
    }

    const openHandleChange = () => {
        setIsOpenMenu(!isOpenMenu)
    }
    
    useEffect(() => {
        // Function to handle clicks outside the header
        const handleOutsideClick = (event) => {
            if (!event.target.closest('header')) {
                mobHandleClose();
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener('click', handleOutsideClick);

        // Clean up: Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);     
    return (
        <>
            <header>
                <div className='container w-full flex justify-between items-center relative'>
                    <div className='logo'>
                        <img src={logo} alt='Logo' />
                    </div>
                    <div className='right'>
                        <nav>
                            <ul className={`main-navbar ${isMob ? 'mob-nav' : ''}`}>
                                <Link onClick={mobHandleClose} to={'/'}>Home</Link>
                                <Link onMouseEnter={openHandleChange} onMouseLeave={closeHandleChange} className='dropdown-relative'>
                                    All Product <i class="ri-arrow-down-s-line"></i>
                                    <ul className={`dropdown-1 ${isOpenMenu ? "show" : ""}`}>
                                        <Link onClick={mobHandleClose} to={'/mens'}>Mens</Link>
                                        <Link onClick={mobHandleClose} to={'/womens'}>Womens</Link>
                                        <Link onClick={mobHandleClose} to={'/kids'}>Kids</Link>
                                    </ul>
                                </Link>
                                <Link onClick={mobHandleClose} to={'/contact'}>Contact</Link>
                                <Link onClick={mobHandleClose} to={'/about'}>About</Link>
                            </ul>
                        </nav>
                        <div className='menu'>
                            <i class="ri-menu-line" onClick={mobHandleChange}></i>
                        </div>
                        <div className='cart' >
                            <i class="ri-shopping-cart-fill"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
