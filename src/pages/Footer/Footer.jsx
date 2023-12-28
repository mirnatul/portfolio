import React from 'react';
import logoDark from '../../assets/logo-dark.png'

const Footer = () => {
    return (
        <div className='pt-10'>
            <footer className="footer border-t-2 pt-8">
                <div>
                    <a className="font-bold text-4xl"><img className='lg:w-[240px] w-[130px]' src={logoDark} alt="" /></a>
                    <p>XYZ Industries Ltd.<br />Providing reliable tech since 2023</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4">
                <div>
                    <p>Copyright © 2023 - All right reserved by Md Mirnatul Islam</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;