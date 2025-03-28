import { NavLink } from "react-router-dom";
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Designs from './Designs'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed:{
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

    const openDesigns = () => {
        return <Designs/>
    }

    return (
        <nav className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50 bggrad1 '>
            <div className='max-w-[1300px] mx-auto flex justify-between 
        text-xl items-center px-12 h-20 text-light1 '>

                <NavLink to="/portfolio">Danya Cheng</NavLink>
 
                <ul className='hidden md:flex gap-12 z-10 cursor-pointer text-med '>
                    <li className='nav '>
                        <NavLink to="/portfolio-about" smooth={true} offset={50} duration={500}>about</NavLink>
                    </li>
                    <li className='nav '><NavLink to="/portfolio-projects" smooth={true} offset={50} duration={500}>projects</NavLink></li>
                    <li className='nav '><NavLink to="/portfolio-designs" smooth={true} offset={50} duration={500}>designs</NavLink></li>
                    {/*<li className='nav '><Link to="/about" smooth={true} offset={50} duration={500}>about</Link></li>
                    <li className='nav '><Link to="/projects" smooth={true} offset={50} duration={500}>projects</Link></li>
                    <li className='nav '><Link to="/designs" smooth={true} offset={50} duration={500}>designs</Link></li>
                    */}
                    {/*<li className='nav '><Link to="skills" smooth={true} offset={50} duration={500}>skills</Link></li>*/}
                </ul>
                <div onClick={toggleNav} className='md:hidden z-50 text-med fill-current'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} className='fill-light2' />}

                </div> 

                <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className='fixed left-0 top-0 w-full min-h-screen bg-dark1 z-40 '>
                    <ul className='font-semibold text-4xl space-y-8 mt-24 text-center text-med '>
                    <li className='nav '><NavLink to="/portfolio-about" onClick={closeNav} smooth={true} offset={50} duration={500}>about</NavLink></li>
                    <li className='nav '><NavLink to="/portfolio-projects" onClick={closeNav} smooth={true} offset={50} duration={500}>projects</NavLink></li>
                    <li className='nav '><NavLink to="/portfolio-designs" onClick={closeNav} smooth={true} offset={50} duration={500}>designs</NavLink></li>
                    {/*<li className='nav '><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>skills</Link></li>*/}
                    </ul>
                </motion.div>

            </div>
                
            
        </nav>
    )
}

export default NavBar