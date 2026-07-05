import React from 'react';
import logoDark from '../../assets/logo-dark.png'
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { RxTwitterLogo } from 'react-icons/rx';
import { RiFacebookLine } from 'react-icons/ri';


const Footer = () => {
    return (
        <div className='pt-10'>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 gap-3">
                <a className="font-extrabold text-3xl md:text-6xl text-[#10B981] [-webkit-text-stroke:1px_black]">Mirnatul .</a>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='flex font-normal text-lg items-center'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </div>
                    </ul>
                </div>
                <div className="flex justify-center lg:justify-start items-center gap-4 relative">
                    <a href="https://github.com/mirnatul" target="_blank" rel="noopener noreferrer">
                        <FiGithub size={30} className="hover:text-gray-600" />
                    </a>

                    <a href="https://www.linkedin.com/in/mdmirnatulislam/" target="_blank" rel="noopener noreferrer">
                        <CiLinkedin size={30} className="hover:text-blue-600" />
                    </a>

                    <a href="https://x.com/mirnatul_lipon" target="_blank" rel="noopener noreferrer">
                        <RxTwitterLogo size={30} className="hover:text-blue-600" />
                    </a>

                    <a href="https://www.facebook.com/mirnatulislam.lipon/" target="_blank" rel="noopener noreferrer">
                        <RiFacebookLine size={30} className="hover:text-blue-600" />
                    </a>

                    <a href="mailto:mdmirnatul@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you">
                        <CiMail size={30} className="hover:text-red-600" />
                    </a>
                </div>
                <hr className='border-1 border-slate-300 w-full my-6 md:my-10 md:w-[700px]' />
                <aside className=''>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Md Mirnatul Islam</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;