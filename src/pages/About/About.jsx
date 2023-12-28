import React from 'react';
import Lottie from "lottie-react";
import aboutImage from "../../about-image.json"

const About = () => {
    return (
        <div id='about' className='mt-16 lg:mt-32 text-center lg:text-left'>
            <h2 className='font-bold text-3xl lg:text-4xl text-center mb-0 lg:mb-16 border-b-4 border-warning w-[170px] mx-auto'>About Me</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 items-center'>
                <div className='mx-auto'><Lottie animationData={aboutImage} loop={true} /></div>
                <div className='mb-6 lg:mb-0'>
                    <p className='leading-7 lg:leading-9 text-md lg:text-xl mb-2 text-justify'>Welcome to my portfolio! I am a junior MERN stack developer who is enthusiastic about creating dynamic web applications. I recently completed an intensive web development course at Programming Hero, where I honed my skills in the MERN stack. Equipped with a solid foundation in JavaScript, I thrive on crafting interactive and responsive user interfaces.</p>
                    <p className='leading-7 lg:leading-9 text-md lg:text-xl mb-2 text-justify'>With a Bachelor's degree in Computer Science and Engineering from Dhaka International University, I have gained a comprehensive understanding of software development principles and practices. My educational background, combined with hands-on experience in building applications using ReactJS, NodeJS, ExpressJS, and MongoDB, enables me to develop robust and scalable solutions. I am passionate about staying up-to-date with the latest industry trends and continuously expanding my knowledge to deliver cutting-edge projects.</p>
                    <p className='leading-7 lg:leading-9 text-md lg:text-xl text-justify'>If you are interested you can check out my work as well as download my resume.</p>
                </div>
            </div>
        </div>
    );
};

export default About;