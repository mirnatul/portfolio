import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logoLight from '../../assets/logo-light.png'
import logoDark from '../../assets/logo-dark.png'
import { BsSun, BsMoon } from 'react-icons/bs'

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
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
        <div className="navbar border-b-2 py-3">
            <div className="navbar-start">
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
                            <li className='bg-yellow-400 rounded-sm text-white'><Link to='#contact'>Hire Me</Link></li>
                        </div>
                    </ul>
                </div>
                <a className="font-bold text-4xl"><img className='lg:w-[240px] w-[130px]' src={theme === 'light' ? logoLight : logoDark} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className='flex font-semibold text-lg items-center'>
                        <li><Link to='#home'>Home</Link></li>
                        <li><Link to='#about'>About</Link></li>
                        <li><Link to='#skills'>Skills</Link></li>
                        <li><Link to='#services'>Services</Link></li>
                        <li><Link to='#projects'>Projects</Link></li>
                        <li className='bg-warning text-black rounded-md'><Link to='#contact'>Hire Me</Link></li>
                    </div>
                </ul>
            </div>
            <div className="navbar-end lg:flex lg:pr-8">
                <ul className="menu menu-horizontal px-1">
                    <li className='w-10 lg:w-none'>
                        <label className="swap swap-rotate">
                            <input type="checkbox" onChange={handleToggle} />
                            {theme === 'light' && <BsMoon className='text-slate-600 w-6 h-6 lg:w-10 lg:h-10'></BsMoon>}
                            {theme === 'dark' && <BsSun className='fill-current w-6 h-6 lg:w-10 lg:h-10'></BsSun>}
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;