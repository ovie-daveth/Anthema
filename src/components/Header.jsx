import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight, AiOutlineComment, AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai'
import { SiTwitter } from 'react-icons/si'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [menuOpen, menuClose] = useState(true)
    const [hover, setHover] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)


    const onhover = () => {
        setHover(!hover)
    }

    const menuOpenClose = () => {
        menuClose(!menuOpen)
    }
  return (
   <header className=' flex items-center justify-between bg-gray-600 h-[70px] px-2 md:px-20 z-50'>
    <div className="flex items-center gap-3">
        <div className=" flex gap-1 items-center text-2xl font-bold text-white">
            <p><AiOutlineLeft /></p>
            <h1 className=' text-red-600'>CDJ<span className=' text-white'>NS</span></h1>
            <p><AiOutlineRight /></p>
        </div>
        <div className="flex text-white gap-3 items-center text-xl">
           <SiTwitter className=' hover:text-red-200 transition-all .4s ease-in-out cursor-pointer' />
           <AiOutlineComment className=' hover:text-red-200 transition-all .4s ease-in-out cursor-pointer' />
        </div>
    </div>
    <div className={`md:flex text-white gap-5 font-semibold text-lg  ${!menuOpen ? 'flex flex-col justify-around items-center gap-5 bg-gray-600 px-10 absolute top-14 right-0 bottom-0 w-full transition-all ease-in-out .5s z-0': "z-0 md:translate-y-0 flex -translate-y-48"}`}>
        <NavLink to='/' className=' hover:text-red-200 py-1 hover:border-b-2 border-red-200 transition-all .4s ease-in-out cursor-pointer'>Home</NavLink>
        <NavLink to="/" className=' hover:text-red-200  py-1 hover:border-b-2 border-red-200 transition-all .4s ease-in-out cursor-pointer'>Meet</NavLink>
        <NavLink to="/" className=' hover:text-red-200  py-1 hover:border-b-2 border-red-200 transition-all .4s ease-in-out cursor-pointer'>Socials</NavLink>
        <NavLink to="/" className=' hover:text-red-200  py-1 hover:border-b-2 border-red-200 transition-all .4s ease-in-out cursor-pointer'>Double</NavLink>
        <NavLink to="/" className=' hover:text-red-200   py-1 transition-all .4s ease-in-out cursor-pointer relative'
        onMouseUp={onhover}
        > <p className='flex gap-2 items-center'>More <span  className=' text-sm mt-1'>
            {
                hover ? (<AiOutlineRight />) : (<AiOutlineDown />)
            }
            </span></p>
        <div className={` text-white flex-col justify-center items-center gap-4 text-sm ${!hover ? 'flex absolute top-8 -right-6 bg-gray-600 px-6 py-5 w-[120px]' : 'hidden'}`}>
            {
                loggedIn ? (
                    <>
                         <NavLink className='py-2 hover:border-b-2 border-red-200' to="/">Sign Out</NavLink>
                    </>
                )
                :
                (
                    <>
                         <NavLink className='py-2 hover:border-b-2 border-red-200' to="/register">Register</NavLink>
                        <NavLink className='py-2 hover:border-b-2 border-red-200' to="/signin">Sign In</NavLink>
                    </>
                )
            }
        </div>
        </NavLink>
    </div>
    <div className="md:hidden block text-2xl text-white"
    onClick={menuOpenClose}
    >
        {
            menuOpen ? <AiOutlineMenu /> : < AiOutlineClose />
        }
        
        
    </div>
   </header>
  )
}

export default Header
