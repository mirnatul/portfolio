import React from 'react';
import Lottie from "lottie-react";
import aboutImage from "../../about-image.json"
import aboutImageLight from "../../about_light.json"

const About = () => {
    return (
        <div id='about' className="scroll-mt-48">
            <div className='mt-16 lg:mt-32 text-center lg:text-left'>
                {/* <h2 className='font-bold text-3xl lg:text-4xl text-center mb-0 lg:mb-16 border-b-4 border-[#10B981] w-[170px] mx-auto'>About Me</h2> */}
                <h2 className='text-[#10B981] [-webkit-text-stroke:1px_black] font-bold text-3xl lg:text-5xl text-center mb-0 lg:mb-16 mx-auto'>About Me .</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 items-center'>
                    <div className='mx-auto'><Lottie animationData={aboutImageLight} loop={true} /></div>
                    <div className='mb-6 lg:mb-0 col-span-2 lg:pl-12'>
                        <p className='leading-7 lg:leading-9 text-md lg:text-xl mb-2 text-justify'>Hello! I'm <strong className='border-b-2 border-green-500'> Md Mirnatul Islam</strong>, a final-year  <strong className='border-b-2 border-green-500'> Computer Science and Engineering</strong> student at  <strong className='border-b-2 border-green-500'> Dhaka International University</strong> and a passionate  <strong className='border-b-2 border-green-500'> Full-Stack Developer</strong>. My programming journey started with a curiosity about how modern web applications are built, which led me to explore the MERN stack and beyond.</p>
                        <p className='leading-7 lg:leading-9 text-md lg:text-xl mb-2 text-justify'>Today, I build full-stack applications using <strong className='border-b-2 border-green-500'>React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, TypeScript, and Tailwind CSS.</strong> I enjoy creating responsive, scalable, and user-friendly web applications while writing clean and maintainable code.</p>
                        <p className='leading-7 lg:leading-9 text-md lg:text-xl mb-2 text-justify'>Beyond programming, I enjoy solving coding challenges, exploring new technologies, and continuously improving my development skills. I'm always eager to learn, take on new challenges, and grow as a software engineer.</p>
                        <p className='leading-7 lg:leading-9 text-md lg:text-xl text-justify'>Feel free to explore my projects and download my resume to learn more about my work and experience.</p>
                    </div>
                </div>
                <h3 className=' mt-6 lg:mt-12 mb-4 font-semibold md:text-2xl text-[#10B981]'>Beyond Code</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 items-center text-justify gap-3'>
                    <div className='border rounded-lg p-6 shadow-md'>
                        <h2 className='text-lg md:text-2xl font-bold mb-2'>Cricket</h2>
                        <p>I am an active cricket player and recently took part in my last company tournament, where I performed 3rd best player. Cricket has strengthened my teamwork.</p>
                    </div>
                    <div className='border rounded-lg p-6 shadow-md'>
                        <h2 className='text-lg md:text-2xl font-bold mb-2'>Movies</h2>
                        <p>I enjoy sci-fi and mind-bending thriller movies with unique concepts and meaningful perspectives on life, which inspire my creativity and way of thinking.</p>
                    </div>
                    <div className='border rounded-lg p-6 shadow-md'>
                        <h2 className='text-lg md:text-2xl font-bold mb-2'>Books</h2>
                        <p>I like philosophical books that explore life and human existence, and Sophie’s World is one of my favorites for its simple yet deep understanding of ideas.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;