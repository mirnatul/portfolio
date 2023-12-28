import React from 'react';
import bannerImg from '../../assets/profile.png'
import Typewriter from 'typewriter-effect';
import { BiDownload } from 'react-icons/bi'
import Lottie from "lottie-react";
import bannerBg from "../../banner-bg.json";

const Banner = () => {

    const onButtonClick = () => {
        fetch('mirnatul-mern-resume.pdf')
            .then(response => {
                response.blob()
                    .then(blob => {
                        const fileURL = window.URL.createObjectURL(blob);
                        let alink = document.createElement('a')
                        alink.href = fileURL;
                        alink.download = 'mirnatul-mern-resume.pdf'
                        alink.click();
                    })
            })
    }

    return (
        <div id='home' className='text-center lg:text-left lg:mt-10 mt-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
                <div className='mb-6 lg:mb-0'>
                    <p className='text-normal lg:text-lg'>Hi, I am</p>
                    <h1 className='text-2xl lg:text-4xl' style={{ fontWeight: 700 }}>Md Mirnatul Islam</h1>
                    <h2 className={`underline my-4 lg:mb-10 font-bold text-2xl lg:text-5xl text-warning drop-shadow-sm shadow-black`}>
                        <Typewriter
                            options={{
                                strings: ['Specialized in ReactJS', 'MERN Stack Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p className='leading-7 lg:leading-8 text-md lg:text-2xl mb-8 banner-text'>Self-taught programmer with proficiency in MERN stack, solid understanding of JavaScript, HTML and CSS. Committed to continuous learning and staying updated with industry trends. Skilled in creating responsive user interfaces and building RESTful APIs.</p>
                    <button onClick={onButtonClick} className='btn btn-warning'>Download Resume <BiDownload size={26}></BiDownload></button>
                </div>
                <div className='mx-auto pt-3 px-16 relative overflow-hidden border-b-8 border-[#FBBD23] w-full lg:w-[600px]'>
                    <div className='absolute w-full lg:w-[600px] -z-10 right-2 top-16'>
                        <Lottie className='' animationData={bannerBg} loop={true} />
                    </div>
                    <div className=''>
                        <img className='w-[380px] mx-auto' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;