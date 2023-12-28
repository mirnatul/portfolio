import React from 'react';
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'

import { FaRegEye } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { BiSolidDetail } from 'react-icons/bi'

import Lottie from "lottie-react";
import scroll from '../../scroll.json'

const Projects = () => {
    return (
        <div id='projects' className='mt-16 lg:mt-32 text-center lg:text-left'>
            <h2 className='font-bold text-3xl lg:text-4xl text-center mb-12 lg:mb-16 border-b-4 border-warning w-[210px] mx-auto'>My Projects</h2>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>

                {/* project 1 */}
                <div>
                    <div className={`border-2 px-2 lg:px-6 py-2 lg:py-4 rounded-lg bg-cover bg-black h-[350px] ease-in duration-[7000ms] bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${project1})` }}>
                        <div className='flex justify-center h-full mt-24'>
                            <Lottie className='w-[100px]' animationData={scroll} loop={true} />
                        </div>
                    </div>
                    <div className='text-left p-2'>
                        <h3 className='mt-5 mb-3'><span className='text-xl font-bold underline decoration-[#FBBD23] decoration-4'>summerSports</span> - a summer camp programme management system</h3>
                        <p><span className='text-lg'>Technologies</span>: ReactJS | NodeJS | ExpressJS | Tailwind CSS | Firebase | MongoDB | React Hook Form | Vercel | Srtipe | Axios</p>
                        <div className='flex justify-center items-center gap-4 lg:gap-6 mt-4'>
                            <a href='https://summer-sports.netlify.app/' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black'>
                                <p><FaRegEye size={28}></FaRegEye></p>
                                <p>Live</p>
                            </a>
                            <a href='https://github.com/mirnatul/summer-camp-client' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black'>
                                <p><AiFillGithub size={28}></AiFillGithub></p>
                                <p>Client</p>
                            </a>
                            <a href='https://github.com/mirnatul/summer-camp-server' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black'>
                                <p><AiFillGithub size={28}></AiFillGithub></p>
                                <p>Server</p>
                            </a>
                        </div>
                        <div className='flex justify-center mr-[17px] mt-3'>
                            <a onClick={() => window.my_modal_1.showModal()} className='flex justify-center items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black w-[110px]'>
                                <p><BiSolidDetail size={28}></BiSolidDetail></p>
                                <p>Details</p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* project 2 */}
                <div>
                    <div className={`border-2 px-2 lg:px-6 py-2 lg:py-4 rounded-lg bg-cover bg-black h-[350px] ease-in duration-[7000ms] bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${project2})` }}>
                        <div className='flex justify-center h-full mt-24'>
                            <Lottie className='w-[100px]' animationData={scroll} loop={true} />
                        </div>
                    </div>
                    <div className='text-left p-2'>
                        <h3 className='mt-5 mb-3'><span className='text-xl font-bold underline decoration-[#FBBD23] decoration-4'>Carz Zone</span> - buy and sell your toy</h3>
                        <p><span className='text-lg'>Technologies</span>: ReactJS | NodeJS | ExpressJS | Tailwind CSS | Firebase | MongoDB | React Hook Form</p>
                        <div className='flex justify-center items-center gap-4 lg:gap-6 mt-4'>
                            <a href='https://carz-zone-dbd73.web.app/' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black'>
                                <p><FaRegEye size={28}></FaRegEye></p>
                                <p>Live</p>
                            </a>
                            <a href='https://github.com/Li-Pon/carz-zone-client' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black'>
                                <p><AiFillGithub size={28}></AiFillGithub></p>
                                <p>Client</p>
                            </a>
                            <a href='https://github.com/Li-Pon/carz-zone-server' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black'>
                                <p><AiFillGithub size={28}></AiFillGithub></p>
                                <p>Server</p>
                            </a>
                        </div>
                        <div className='flex justify-center mr-[17px] mt-3'>
                            <a onClick={() => window.my_modal_2.showModal()} className='flex justify-center items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black w-[110px]'>
                                <p><BiSolidDetail size={28}></BiSolidDetail></p>
                                <p>Details</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* project 3 */}
                <div>
                    <div className={`border-2 px-2 lg:px-6 py-2 lg:py-4 rounded-lg bg-cover bg-black h-[350px] ease-in duration-[4000ms] bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${project3})` }}>
                        <div className='flex justify-center h-full mt-24'>
                            <Lottie className='w-[100px]' animationData={scroll} loop={true} />
                        </div>
                    </div>
                    <div className='text-left p-2'>
                        <h3 className='mt-5 mb-3'><span className='text-xl font-bold underline decoration-[#FBBD23] decoration-4'>Squad</span> - a task board management</h3>
                        <p><span className='text-lg'>Technologies</span>: React.js | Node.js | Express.js | MongoDB | Firebase | Vercel | Tailwind CSS</p>
                        <div className='flex justify-center items-center gap-4 lg:gap-6 mt-4'>
                            <a href='https://squad-e7252.web.app/' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black'>
                                <p><FaRegEye size={28}></FaRegEye></p>
                                <p>Live</p>
                            </a>
                            <a href='https://github.com/Li-Pon/squad-client' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black'>
                                <p><AiFillGithub size={28}></AiFillGithub></p>
                                <p>Client</p>
                            </a>
                            <a href='https://github.com/Li-Pon/squad-server' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black'>
                                <p><AiFillGithub size={28}></AiFillGithub></p>
                                <p>Server</p>
                            </a>
                        </div>
                        <div className='flex justify-center mr-[17px] mt-3'>
                            <a onClick={() => window.my_modal_3.showModal()} className='flex justify-center items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#FBBD23] hover:text-black w-[110px]'>
                                <p><BiSolidDetail size={28}></BiSolidDetail></p>
                                <p>Details</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div >


            <dialog id="my_modal_1" className="modal text-left">
                <form method="dialog" className="modal-box w-11/12 mx-w-90% lg:max-w-[60%] px-4 lg:px-20 py-4 lg:py-8">
                    <h3 className="font-bold text-xl underline">summerSports - a summer camp programme management</h3>
                    <p className="py-4">This is basically a udemy type website where a instructor can add course and student can enroll it.</p>
                    <h3 className='mt-8 text-lg mb-6'>Here are some most key features of this website:</h3>
                    <ul className='list-disc text-left'>
                        <li>Here a student can enroll a course and manage their course.</li>
                        <li>There are three dashboard for admin, instructor and user. Admin can change the role.</li>
                        <li>Instructor can add courses which will be shown on the classes route.</li>
                        <li>Also other routs shows about all the instructors and students</li>
                        <li>By signing in you can access the dashboard according to your role.</li>
                    </ul>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>

            <dialog id="my_modal_2" className="modal text-left">
                <form method="dialog" className="modal-box w-11/12 mx-w-90% lg:max-w-[60%] px-4 lg:px-20 py-4 lg:py-8">
                    <h3 className="font-bold text-xl underline">Carz Zone - buy and sell your toy</h3>
                    <p className="py-4">Carz Zone is a toy cars marketplace where you can find verities of toy cars.</p>
                    <h3 className='mt-8 text-lg mb-6'>Here are some most key features of this website:</h3>
                    <ul className='list-disc text-left'>
                        <li>This is a toy eCommerce website where you will find varieties of toy cars.</li>
                        <li>In this project used firebase authentication system for login and registration as well as google login system is there.</li>
                        <li>If you want to see ty details you have to make sure that you are authenticated on not.</li>
                        <li>Once you are authenticated you can add a new toy for your own and only you can see these toys.</li>
                        <li>You can update and delete your toys.</li>
                    </ul>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>

            <dialog id="my_modal_3" className="modal text-left">
                <form method="dialog" className="modal-box w-11/12 mx-w-90% lg:max-w-[60%] px-4 lg:px-20 py-4 lg:py-8">
                    <h3 className="font-bold text-xl underline">Squad - a task management app</h3>
                    <p className="py-4"></p>
                    <h3 className='mt-8 text-lg mb-6'>Here are some most key features of this website:</h3>
                    <ul className='list-disc text-left'>
                        <li>To understand the app properly, please read the live sites help section.</li>
                        <li>It is a task management app providing you secret, mentioned and public type of board.</li>
                        <li>Where you can manage your to do, doing, done task individually.</li>
                        <li>In mentioned you can manage task grouply and in public all the task will be shown as read-only.</li>
                    </ul>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>



        </div >
    );
};

export default Projects;