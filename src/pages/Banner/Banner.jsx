import React from 'react';
import bannerImg from '../../assets/profile.jpg'
import Typewriter from 'typewriter-effect';
import { BiDownload } from 'react-icons/bi'
import { FiGithub } from "react-icons/fi";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { RxTwitterLogo } from "react-icons/rx";
import { RiFacebookLine } from "react-icons/ri";

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
        <div id='home' className='text-center lg:text-left lg:mt-20 mt-6 mx-2 lg:pt-28 lg:py-16 scroll-mt-44'>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-8 items-center'> */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
                <div className='mb-6 lg:mb-0'>
                    <p className='text-normal lg:text-lg'>Hi, I am</p>
                    <h1 className='text-2xl lg:text-4xl' style={{ fontWeight: 700 }}>Md Mirnatul Islam</h1>
                    <h2 className={`my-4 lg:mb-10 underline underline-offset-8 font-bold text-2xl lg:text-5xl text-[#10B981] [-webkit-text-stroke:1px_black] drop-shadow-sm shadow-black`}>
                        <Typewriter
                            options={{
                                strings: [
                                    'Full Stack Developer',
                                    'React • Next.js • TypeScript',
                                    'MERN + PostgreSQL + Prisma',
                                    'Building scalable web apps'
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p className='text-md lg:text-2xl font-normal mb-8'>Full-stack developer skilled in MERN stack, building responsive UIs and REST APIs with JavaScript, HTML, and CSS. Expanding expertise in TypeScript, Next.js, PostgreSQL, and Prisma for scalable web applications.</p>
                    <div className='flex flex-col md:flex-row gap-4 justify-center lg:justify-start'>
                        <button
                            onClick={onButtonClick}
                            className="bg-[#10B981] border border-slate-900 text-white font-bold px-8 py-4 rounded-md flex items-center gap-2 leading-none"
                        >
                            Download Resume <BiDownload size={26} />
                        </button>
                        <button
                            className="bg-green-50 border border-slate-900 text-[#10B981] font-bold px-8 py-4 rounded-md flex items-center gap-2 leading-none"
                        >
                            <a href='#projects'>View my Work</a>
                        </button>
                    </div>
                    <div className="mt-6 flex justify-center lg:justify-start items-center gap-4 relative z-50">
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
                </div>


                {/* banner image */}
                <div className='mx-auto pt-3 px-16 relative overflow-hidden w-full flex justify-center py-10'>
                    <div className="avatar">
                        <div className="ring-[#1eb180b0] ring-offset-base-800 rounded-full w-[250px] md:w-[400px] xl:w-[450px] ring-8 ring-offset-2">
                            <img className='mx-auto' src={bannerImg} alt="" />
                            <div className='absolute top-5 md:top-28 left-[-50px] z-50 border border-gray-500 text-black p-2 animate-bounce backdrop-blur-md [animation-duration:3s] md:py-3 md:px-4 rounded-2xl'>Clean Code</div>
                            <div className='absolute top-24 md:top-20 right-[-55px] md:right-[-50px] z-50 border border-gray-500 text-black p-2 animate-bounce backdrop-blur-md [animation-duration:3s] md:py-3 md:px-4 rounded-2xl'>Available to Work</div>
                            <div className='absolute bottom-2 md:bottom-10 left-[-50px] md:left-[-70px] z-50 border border-gray-500 text-black p-2 animate-bounce backdrop-blur-md [animation-duration:3s] md:py-3 md:px-4 rounded-2xl'>Pixel Perfect Design</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;