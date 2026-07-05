import React from 'react';
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'

import { FaRegEye } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { BiSolidDetail } from 'react-icons/bi'

import Lottie from "lottie-react";
import scroll from '../../scroll.json'
import TechBlock from './TechBlock';

import summerCover from '../../assets/summercover.png'
import toy from '../../assets/toycover.png'
import TechBlockDetails from './TechBlockDetails';

// frontend
import html from '../../assets/skill_logo/html.png'
import css from '../../assets/skill_logo/css.png'
import js from '../../assets/skill_logo/js.png'
import ts from '../../assets/skill_logo/ts.svg'
import react from '../../assets/skill_logo/react.png'
import next from '../../assets/skill_logo/next.png'
import tailwind from '../../assets/skill_logo/tailwind.png'

// backend
import node from '../../assets/skill_logo/node.png'
import express from '../../assets/skill_logo/express.png'
import jwt from '../../assets/skill_logo/jwt.png'
import firebase from '../../assets/skill_logo/firebase.png'

// database
import postgre from '../../assets/skill_logo/postgre.svg'
import mongodb from '../../assets/skill_logo/mongodb.png'
import prisma from '../../assets/skill_logo/prisma.svg'
import mysql from '../../assets/skill_logo/mysql.svg'

// tools
import git from '../../assets/skill_logo/git.png'
import github from '../../assets/skill_logo/github.svg'
import vs from '../../assets/skill_logo/vs.png'
import postman from '../../assets/skill_logo/postman.png'
import notion from '../../assets/skill_logo/notion.png'
import netlify from '../../assets/skill_logo/netlify.png'
import vercel from '../../assets/skill_logo/vercel.png'
import figma from '../../assets/skill_logo/figma.svg'
import npm from '../../assets/skill_logo/npm.svg'

// extra

import stripe from '../../assets/skill_logo/stripe.png'
import axios from '../../assets/skill_logo/axios.png'
import reacthook from '../../assets/skill_logo/react-hook.png'
import { Link } from 'react-router-dom';


// porject 2
const tech = [
    [
        ["React JS", react],
        ["Node JS", node],
        ["Express JS", express],
        ["Tailwind CSS", tailwind],
        ["Firebase", firebase],
        ["MongoDB", mongodb],
        ["React Hook Form", reacthook],
        ["Vercel", vercel],
        ["Stripe", stripe],
        ["Axios", axios],
    ],
    [
        ["React JS", react],
        ["Node JS", node],
        ["Express JS", express],
        ["Tailwind CSS", tailwind],
        ["Firebase", firebase],
        ["MongoDB", mongodb],
        ["React Hook Form", reacthook],
    ],
    [
        ["React JS", react],
        ["Node JS", node],
        ["Express JS", express],
        ["Tailwind CSS", tailwind],
        ["Firebase", firebase],
        ["MongoDB", mongodb],
        ["Vercel", vercel],
    ],
];

const Projects = () => {
    return (
        <div id='projects' className='mt-16 lg:mt-32 text-center lg:text-left scroll-mt-44'>
            <h2 className='text-[#10B981] [-webkit-text-stroke:1px_black] font-bold text-3xl lg:text-5xl text-center mb-6 lg:mb-16 mx-auto'>My Projects .</h2>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>

                {/* project 1 */}
                <div className='flex flex-col border p-4 rounded-lg'>
                    <div className={`border-2 px-2 lg:px-6 py-2 lg:py-4 rounded-lg bg-cover bg-black h-[350px] ease-in duration-[7000ms] bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${project1})` }}>
                        <div className='flex justify-center h-full mt-24'>
                            <Lottie className='w-[100px]' animationData={scroll} loop={true} />
                        </div>
                    </div>
                    <div className='text-left p-2'>
                        <div className='mt-5 mb-3'>
                            <h3 className='text-xl md:text-3xl text-[#10B981] font-bold mb-4'>summerSports</h3>
                            <p>summerSports is a summer camp programme management system for organizing activities, participants, and schedules efficiently.</p>
                        </div>
                        <div className='h-[110px] flex items-center'>
                            <div className='flex gap-2 flex-wrap mt-6]'>
                                {
                                    tech[0].map((title, index) => <TechBlock key={index} title={title[0]}></TechBlock>)
                                }
                            </div>
                        </div>
                        <div className='flex gap-2 mt-4 flex-wrap'>
                            <a href='https://summer-sports.netlify.app/' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black'>
                                <p><FaRegEye className='text-lg md:text-xl'></FaRegEye></p>
                                <p>Live</p>
                            </a>
                            <a href='https://github.com/mirnatul/summer-camp-client' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black'>
                                <p><AiFillGithub className='text-lg md:text-xl'></AiFillGithub></p>
                                <p>Client</p>
                            </a>
                            <a href='https://github.com/mirnatul/summer-camp-server' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black'>
                                <p><AiFillGithub className='text-lg md:text-xl'></AiFillGithub></p>
                                <p>Server</p>
                            </a>
                            <a onClick={() => window.my_modal_1.showModal()} className='flex justify-center items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black w-[110px]'>
                                <p><BiSolidDetail className='text-lg md:text-xl'></BiSolidDetail></p>
                                <p>Details</p>
                            </a>
                        </div>

                    </div>
                </div>

                {/* project 2 */}
                <div className='flex flex-col border p-4 rounded-lg'>
                    <div className={`border-2 px-2 lg:px-6 py-2 lg:py-4 rounded-lg bg-cover bg-black h-[350px] ease-in duration-[7000ms] bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${project2})` }}>
                        <div className='flex justify-center h-full mt-24'>
                            <Lottie className='w-[100px]' animationData={scroll} loop={true} />
                        </div>
                    </div>
                    <div className='text-left p-2'>
                        <div className='mt-5 mb-3'>
                            <h3 className='text-xl md:text-3xl text-[#10B981] font-bold mb-4'>Carz Zone</h3>
                            <p>Carz Zone buy and sell your toy establish your business platform for entrepreneurs marketplace system enabling growth opportunities.</p>
                        </div>
                        <div className='h-[110px] flex items-center'>
                            <div className='flex gap-2 flex-wrap my-6]'>
                                {
                                    tech[1].map((title, index) => <TechBlock key={index} title={title[0]}></TechBlock>)
                                }
                            </div>
                        </div>
                        <div className='flex gap-2 mt-4 flex-wrap'>
                            <a href='https://carz-zone-dbd73.web.app/' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black'>
                                <p><FaRegEye className='text-lg md:text-xl'></FaRegEye></p>
                                <p>Live</p>
                            </a>
                            <a href='https://github.com/Li-Pon/carz-zone-client' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black'>
                                <p><AiFillGithub className='text-lg md:text-xl'></AiFillGithub></p>
                                <p>Client</p>
                            </a>
                            <a href='https://github.com/Li-Pon/carz-zone-server' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black'>
                                <p><AiFillGithub className='text-lg md:text-xl'></AiFillGithub></p>
                                <p>Server</p>
                            </a>
                            <a onClick={() => window.my_modal_2.showModal()} className='flex justify-center items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black w-[110px]'>
                                <p><BiSolidDetail className='text-lg md:text-xl'></BiSolidDetail></p>
                                <p>Details</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* project 3 */}
                <div className='flex flex-col border p-4 rounded-lg'>
                    <div className={`border-2 px-2 lg:px-6 py-2 lg:py-4 rounded-lg bg-cover bg-black h-[350px] ease-in duration-[4000ms] bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${project3})` }}>
                        <div className='flex justify-center h-full mt-24'>
                            <Lottie className='w-[100px]' animationData={scroll} loop={true} />
                        </div>
                    </div>
                    <div className='text-left p-2'>
                        <div className='mt-5 mb-3'>
                            <h3 className='text-xl md:text-3xl text-[#10B981] font-bold mb-4'>Squad</h3>
                            <p>Squad a task board management track your daily work productivity system for organizing tasks efficiently and effectively.</p>
                        </div>
                        <div className='h-[110px] flex items-center'>
                            <div className='flex gap-2 flex-wrap mt-6]'>
                                {
                                    tech[2].map((title, index) => <TechBlock key={index} title={title[0]}></TechBlock>)
                                }
                            </div>
                        </div>
                        <div className='flex gap-2 mt-4 flex-wrap'>
                            <a href='https://squad-e7252.web.app/' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black'>
                                <p><FaRegEye className='text-lg md:text-xl'></FaRegEye></p>
                                <p>Live</p>
                            </a>
                            <a href='https://github.com/Li-Pon/squad-client' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black'>
                                <p><AiFillGithub className='text-lg md:text-xl'></AiFillGithub></p>
                                <p>Client</p>
                            </a>
                            <a href='https://github.com/Li-Pon/squad-server' target={'_blank'} className='flex items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black'>
                                <p><AiFillGithub className='text-lg md:text-xl'></AiFillGithub></p>
                                <p>Server</p>
                            </a>
                            <a onClick={() => window.my_modal_3.showModal()} className='flex justify-center items-center gap-2 border-2 px-2 py-[6px] rounded-md cursor-pointer hover:bg-[#10B981] hover:text-black w-[110px]'>
                                <p><BiSolidDetail className='text-lg md:text-xl'></BiSolidDetail></p>
                                <p>Details</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div >


            <dialog id="my_modal_1" className="modal text-left">
                <form method="dialog" className="modal-box w-11/12 mx-w-90% lg:max-w-[60%] px-4 lg:px-20 py-4 lg:py-8">
                    <div className='mb-6'>
                        <h3 className="font-extrabold text-3xl md:text-6xl text-[#10B981] [-webkit-text-stroke:1px_black] my-4">summerSports .</h3>
                        <p className='md:text-xl mt-8'>summerSports is a summer camp programme management system. It helps organize activities, manage participants, and schedule events efficiently. The system ensures smooth coordination of all camp operations.</p>
                    </div>
                    <img className='my-8' src={summerCover} alt="" />
                    <div className='flex gap-2 flex-wrap mt-6]'>
                        {
                            tech[0].map((title, index) => <TechBlockDetails key={index} title={title}></TechBlockDetails>)
                        }
                    </div>

                    <div className='mt-8 md:text-lg'>
                        <p>SummerSports is a summer camp programme management system that helps students enroll in courses and manage their learning activities in an organized way. It provides a smooth interface for browsing and joining available classes.</p>
                        <br />
                        <p>The platform is built with a role-based system consisting of three dashboards: Admin, Instructor, and Student (User). Each role has different permissions and features to ensure proper system management and user experience.</p>
                        <br />
                        <p>Admins can manage users and update their roles, while instructors can add and manage courses that are displayed on the classes page. Students can enroll in courses and manage their enrolled classes. After signing in, users access the system according to their assigned role through their dashboard.</p>
                    </div>
                    <div className='flex gap-4 mt-8 flex-wrap'>
                        <p className='bg-[#10B981] hover:ring-emerald-400 hover:ring-4 text-white p-3 md:px-6 rounded-xl font-bold border border-slate-600'><Link to='https://summer-sports.netlify.app/' target={'_blank'} className='orbit-btn'>Live Project</Link></p>
                        <p className='bg-white hover:ring-emerald-400 hover:ring-4 text-black p-3 md:px-6 rounded-xl font-bold border border-slate-600'><Link to='https://github.com/mirnatul/summer-camp-client' target={'_blank'} className='orbit-btn'>Frontend Code</Link></p>
                        <p className='bg-white hover:ring-emerald-400 hover:ring-4 text-black p-3 md:px-6 rounded-xl font-bold border border-slate-600'><Link to='https://github.com/mirnatul/summer-camp-server' target={'_blank'} className='orbit-btn'>Backend Code</Link></p>
                    </div>

                    <div className='mt-8 text-lg'>
                        <div className='mt-6 lg:mt-12 mb-6 flex items-center'>
                            <div className='w-4 md:w-8 h-[2px] md:h-1 bg-[#10B981] rounded-full mr-4'></div>
                            <h3 className='font-semibold md:text-2xl text-[#10B981]'>Challenges Faced</h3>
                        </div>
                        <ul className='list-disc list-inside text-sm md:text-base'>
                            <li>Managing multiple camp activities, participants, and schedules in an organized way</li>
                            <li>Ensuring users can easily register, join, and track different camp events without confusion</li>
                            <li>Handling smooth coordination between organizers and participants during busy schedules</li>
                        </ul>
                    </div>

                    <div>
                        <div className='mt-6 lg:mt-12 mb-6 flex items-center'>
                            <div className='w-4 md:w-8 h-[2px] md:h-1 bg-[#10B981] rounded-full mr-4'></div>
                            <h3 className='font-semibold md:text-2xl text-[#10B981]'>Future Implementation</h3>
                        </div>
                        <ul className='list-disc list-inside text-sm md:text-base'>
                            <li>Add real-time notifications for updates, reminders, and schedule changes</li>
                            <li>Develop a mobile-friendly app for easier access from anywhere</li>
                            <li>Introduce analytics to track participation, activity performance, and improvement areas</li>
                        </ul>
                    </div>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>


            <dialog id="my_modal_2" className="modal text-left">
                <form method="dialog" className="modal-box w-11/12 mx-w-90% lg:max-w-[60%] px-4 lg:px-20 py-4 lg:py-8">
                    <div className='mb-6'>
                        <h3 className="font-extrabold text-3xl md:text-6xl text-[#10B981] [-webkit-text-stroke:1px_black] my-4">Carz Zone .</h3>
                        <p className='md:text-xl mt-8'>Carz Zone is a marketplace platform where users can buy and sell toys easily. It helps entrepreneurs build small businesses by connecting buyers and sellers in one system. The platform supports trading, listings, and business growth opportunities.</p>
                    </div>
                    <img className='my-8' src={toy} alt="" />
                    <div className='flex gap-2 flex-wrap mt-6]'>
                        {
                            tech[1].map((title, index) => <TechBlockDetails key={index} title={title}></TechBlockDetails>)
                        }
                    </div>

                    <div className='mt-8 md:text-lg'>
                        <p>This is a toy eCommerce website where users can explore a wide variety of toy cars. The platform provides a smooth browsing experience for viewing available toys and understanding their details.</p>
                        <br />
                        <p>The system uses Firebase authentication for secure login and registration, along with Google sign-in support. Users must be authenticated to access detailed toy information, ensuring proper access control and security within the application.</p>
                        <br />
                        <p>After logging in, users can add their own toys to the platform, which are visible only to them. They also have full control over their listed toys, including the ability to update and delete them, making it a personalized toy management system.</p>
                    </div>
                    <div className='flex gap-4 mt-8 flex-wrap'>
                        <p className='bg-[#10B981] hover:ring-emerald-400 hover:ring-4 text-white p-3 md:px-6 rounded-xl font-bold border border-slate-600'><Link to='https://carz-zone-dbd73.web.app/' target={'_blank'} className='orbit-btn'>Live Project</Link></p>
                        <p className='bg-white hover:ring-emerald-400 hover:ring-4 text-black p-3 md:px-6 rounded-xl font-bold border border-slate-600'><Link to='https://github.com/Li-Pon/carz-zone-client' target={'_blank'} className='orbit-btn'>Frontend Code</Link></p>
                        <p className='bg-white hover:ring-emerald-400 hover:ring-4 text-black p-3 md:px-6 rounded-xl font-bold border border-slate-600'><Link to='https://github.com/Li-Pon/carz-zone-server' target={'_blank'} className='orbit-btn'>Backend Code</Link></p>
                    </div>

                    <div className='mt-8 text-lg'>
                        <div className='mt-6 lg:mt-12 mb-6 flex items-center'>
                            <div className='w-4 md:w-8 h-[2px] md:h-1 bg-[#10B981] rounded-full mr-4'></div>
                            <h3 className='font-semibold md:text-2xl text-[#10B981]'>Challenges Faced</h3>
                        </div>
                        <ul className='list-disc list-inside text-sm md:text-base'>
                            <li>Managing secure authentication and ensuring only verified users can access toy details</li>
                            <li>Implementing user-specific toy data so each user can add, view, update, and delete their own toys</li>
                            <li>Handling smooth data flow between frontend and backend for toy listings and updates</li>
                        </ul>
                    </div>

                    <div>
                        <div className='mt-6 lg:mt-12 mb-6 flex items-center'>
                            <div className='w-4 md:w-8 h-[2px] md:h-1 bg-[#10B981] rounded-full mr-4'></div>
                            <h3 className='font-semibold md:text-2xl text-[#10B981]'>Future Implementation</h3>
                        </div>
                        <ul className='list-disc list-inside text-sm md:text-base'>
                            <li>Introduce payment gateway integration for buying and selling toy cars</li>
                            <li>Add advanced search and filtering options for better product discovery</li>
                            <li>Implement rating and review system to improve trust between buyers and sellers</li>
                        </ul>
                    </div>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>


            <dialog id="my_modal_3" className="modal text-left">
                <form method="dialog" className="modal-box w-11/12 mx-w-90% lg:max-w-[60%] px-4 lg:px-20 py-4 lg:py-8">
                    <div className='mb-6'>
                        <h3 className="font-extrabold text-3xl md:text-6xl text-[#10B981] [-webkit-text-stroke:1px_black] my-4">Squad .</h3>
                        <p className='md:text-xl mt-8'>Squad is a task board management system designed to organize daily work efficiently. It helps users track tasks, manage productivity, and stay organized with structured boards. The system improves workflow, planning, and overall time management.</p>
                    </div>
                    {/* <img className='my-8' src={toy} alt="" /> */}
                    <div className='flex gap-2 flex-wrap mt-6]'>
                        {
                            tech[1].map((title, index) => <TechBlockDetails key={index} title={title}></TechBlockDetails>)
                        }
                    </div>

                    <div className='mt-8 md:text-lg'>
                        <p>This is a task management application designed to help users organize and track their daily work efficiently. It provides a structured system to manage tasks in a clear and simple way.</p>
                        <br />
                        <p>The app includes different types of boards such as secret, mentioned, and public, each serving a different purpose. Users can manage their tasks in to-do, doing, and done stages individually to maintain proper workflow and productivity.</p>
                        <br />
                        <p>In the mentioned board, tasks can be managed collaboratively within a group, while in the public board all tasks are displayed in a read-only format. To understand the system better, users are encouraged to explore the help section of the live site.</p>
                    </div>
                    <div className='flex gap-4 mt-8 flex-wrap'>
                        <p className='bg-[#10B981] hover:ring-emerald-400 hover:ring-4 text-white p-3 md:px-6 rounded-xl font-bold border border-slate-600'><Link to='https://squad-e7252.web.app/' target={'_blank'} className='orbit-btn'>Live Project</Link></p>
                        <p className='bg-white hover:ring-emerald-400 hover:ring-4 text-black p-3 md:px-6 rounded-xl font-bold border border-slate-600'><Link to='https://github.com/Li-Pon/squad-client' target={'_blank'} className='orbit-btn'>Frontend Code</Link></p>
                        <p className='bg-white hover:ring-emerald-400 hover:ring-4 text-black p-3 md:px-6 rounded-xl font-bold border border-slate-600'><Link to='https://github.com/Li-Pon/squad-server' target={'_blank'} className='orbit-btn'>Backend Code</Link></p>
                    </div>

                    <div className='mt-8 text-lg'>
                        <div className='mt-6 lg:mt-12 mb-6 flex items-center'>
                            <div className='w-4 md:w-8 h-[2px] md:h-1 bg-[#10B981] rounded-full mr-4'></div>
                            <h3 className='font-semibold md:text-2xl text-[#10B981]'>Challenges Faced</h3>
                        </div>
                        <ul className='list-disc list-inside text-sm md:text-base'>
                            <li>Designing a secure role-based system to manage different users and board access levels</li>
                            <li>Structuring task workflow across to-do, doing, and done states without data inconsistency</li>
                            <li>Ensuring smooth collaboration between users in mentioned boards while keeping public boards read-only</li>
                        </ul>
                    </div>

                    <div>
                        <div className='mt-6 lg:mt-12 mb-6 flex items-center'>
                            <div className='w-4 md:w-8 h-[2px] md:h-1 bg-[#10B981] rounded-full mr-4'></div>
                            <h3 className='font-semibold md:text-2xl text-[#10B981]'>Future Implementation</h3>
                        </div>
                        <ul className='list-disc list-inside text-sm md:text-base'>
                            <li>Introduce real-time updates and notifications for task changes and deadlines</li>
                            <li>Add drag-and-drop task management for better user experience and workflow control</li>
                            <li>Implement analytics dashboard to track productivity and team performance</li>
                        </ul>
                    </div>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div >
    );
};

export default Projects;