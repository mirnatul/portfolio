import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logoLight from '../../assets/logo-light.png'
import logoDark from '../../assets/logo-dark.png'
import { BsSun, BsMoon } from 'react-icons/bs'

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme]);

    const handleToggle = (e) => {
        if (theme === 'dark') {
            setTheme('light');
        }
        if (theme === 'light') {
            setTheme('dark');
        }
    }

    return (
        <div className="navbar py-3">
            <div className="md:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className='font-semibold text-lg items-center'>
                            <li><Link to='#home'>Home</Link></li>
                            <div className="divider my-0"></div>
                            <li><Link to='#about'>About</Link></li>
                            <div className="divider my-0"></div>
                            <li><Link to='#skills'>Skills</Link></li>
                            <div className="divider my-0"></div>
                            <li><Link to='#services'>Services</Link></li>
                            <div className="divider my-0"></div>
                            <li><Link to='#projects'>Projects</Link></li>
                            <div className="divider my-0"></div>
                            <li className='bg-[#10B981] rounded-sm text-white'><Link to='#contact'>Hire Me</Link></li>
                        </div>
                    </ul>
                </div>
                {/* <a className="font-bold text-4xl"><img className='lg:w-[240px] w-[130px]' src={theme === 'light' ? logoLight : logoDark} alt="" /></a> */}
                <Link to="#home" className='flex items-center gap-3 flex-shrink-0'>
                    <img className='w-12 animate-spin [animation-duration:7s]' src="logo.png" alt="" />
                    <a className="font-extrabold text-3xl md:text-5xl text-[#10B981] [-webkit-text-stroke:1px_black]">Mirnatul .</a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className='flex font-semibold text-lg items-center'>
                        <li><Link to='#home'>Home</Link></li>
                        <li><Link to='#about'>About</Link></li>
                        <li><Link to='#skills'>Skills</Link></li>
                        <li><Link to='#services'>Services</Link></li>
                        <li><Link to='#projects'>Projects</Link></li>
                    </div>
                </ul>
            </div>
            <div className="navbar-end lg:pr-8 hidden md:flex">
                <ul className="flex gap-4 items-center">
                    <li className='bg-[#10B981] text-white p-3 px-6 rounded-xl font-bold border border-slate-600'><Link to='#contact' className='orbit-btn'>Hire Me</Link></li>
                    {/* <li className='pt-1'>
                        <label className="swap swap-rotate">
                            <input type="checkbox" onChange={handleToggle} />
                            {theme === 'light' && <BsMoon className='text-slate-600 w-9 h-9 lg:w-9 lg:h-9'></BsMoon>}
                            {theme === 'dark' && <BsSun className='fill-current w-9 h-9 lg:w-9 lg:h-9'></BsSun>}
                        </label>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;