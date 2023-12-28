import React from 'react';
import Lottie from "lottie-react";
import responsive from "../../responsive.json";
import database from "../../database.json";
import performance from "../../performance.json";

const Services = () => {
    return (
        <div id='services' className='mt-16 lg:mt-32 text-center lg:text-left'>
            <h2 className='font-bold text-3xl lg:text-4xl text-center mb-12 lg:mb-16 border-b-4 border-warning w-[210px] mx-auto'>My Services</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
                <div className='border-2 px-2 lg:px-6 py-2 lg:py-4 rounded-lg service-card lg:hover:scale-[1.07] lg:hover:duration-900 lg:hover:border-[#FBBD23]'>
                    <div className='h-[210px] w-[300px] mx-auto mt-5'>
                        <Lottie className='' animationData={responsive} loop={true} />
                    </div>
                    <h3 className='text-xl lg:text-2xl mb-3' style={{ fontWeight: 700 }}>Custom Responsive Web Design</h3>
                    <p className='text-justify'>I specialize in creating custom websites using the MERN stack, tailored to your unique requirements. From front-end design to back-end development, I deliver high-quality, responsive websites that provide an exceptional user experience. I ensure that your website is fully responsive, providing optimal user experience across desktops, tablets, and smartphones.</p>
                </div>
                <div className='border-2 px-2 lg:px-6 py-2 lg:py-4 rounded-lg service-card lg:hover:scale-[1.07] lg:hover:duration-900 lg:hover:border-[#FBBD23]'>
                    <div className='h-[210px] w-[300px] mx-auto mt-5'>
                        <Lottie className='' animationData={database} loop={true} />
                    </div>
                    <h3 className='text-xl lg:text-2xl mb-3' style={{ fontWeight: 700 }}>Database Integration</h3>
                    <p className='text-justify'>I have experience working with databases like MongoDB allowing me to design and implement efficient data storage and retrieval solutions. Whether you need a database-driven web application or seamless integration with existing databases, I've got you covered.</p>
                </div>
                <div className='border-2 px-2 lg:px-6 py-2 lg:py-4 rounded-lg service-card lg:hover:scale-[1.07] lg:hover:duration-900 lg:hover:border-[#FBBD23]'>
                    <div className='h-[210px] w-[300px] mx-auto mt-5'>
                        <Lottie className='' animationData={performance} loop={true} />
                    </div>
                    <h3 className='text-xl lg:text-2xl mb-3' style={{ fontWeight: 700 }}>React Performance Optimization</h3>
                    <p className='text-justify'>Optimizing React applications for enhanced speed and performance, ensuring smooth interactions and minimal load times. Including - lazy loading image, memorizing expensive component, using immutable data structure, using web workers etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;