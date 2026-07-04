import React from 'react';
import html from '../../assets/skill_logo/html.png'
import css from '../../assets/skill_logo/css.png'
import js from '../../assets/skill_logo/js.png'
import ts from '../../assets/skill_logo/ts.svg'
import react from '../../assets/skill_logo/react.png'
import next from '../../assets/skill_logo/next.png'
import tailwind from '../../assets/skill_logo/tailwind.png'
import SingleSkill from './SingleSkill';

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


const Skills = () => {
    const frontendSkill = [
        {
            name: 'HTML5',
            logo: html
        },
        {
            name: 'CSS3',
            logo: css
        },
        {
            name: 'JavaScript',
            logo: js
        },
        {
            name: 'TypeScript',
            logo: ts
        },
        {
            name: 'ReactJS',
            logo: react
        },
        {
            name: 'NextJS',
            logo: next
        },
        {
            name: 'Tailwind CSS',
            logo: tailwind
        }
    ]

    // backend skills
    const backendSkill = [
        { name: "Node.js", logo: node },
        { name: "Express.js", logo: express },
        { name: "JWT", logo: jwt },
        { name: "Firebase", logo: firebase },
    ];

    // database skills
    const databaseSkill = [
        { name: "PostgreSQL", logo: postgre },
        { name: "MongoDB", logo: mongodb },
        { name: "Prisma", logo: prisma },
        { name: "MySQL", logo: mysql },
    ];

    const toolsSkills = [
        { name: "Git", logo: git },
        { name: "GitHub", logo: github },
        { name: "VS Code", logo: vs },
        { name: "Postman", logo: postman },
        { name: "Notion", logo: notion },
        { name: "Netlify", logo: netlify },
        { name: "Vercel", logo: vercel },
        { name: "Figma", logo: figma },
        { name: "npm", logo: npm },
    ];

    return (
        <div id='skills' className='mt-16 lg:mt-32 skills text-center lg:text-left scroll-mt-48'>
            <h2 className='text-[#10B981] [-webkit-text-stroke:1px_black] font-bold text-3xl lg:text-5xl text-center mb-0 lg:mb-16 mx-auto'>Skills .</h2>
            <div className='mb-6 lg:mb-10'>
                <div className='mt-6 lg:mt-12 mb-6 flex items-center'>
                    <div className='w-8 h-1 bg-[#10B981] rounded-full mr-4'></div>
                    <h3 className='font-semibold md:text-2xl text-[#10B981]'>Frontend</h3>
                </div>
                <div className='flex flex-wrap gap-2 lg:gap-4 justify-center lg:justify-start'>
                    {
                        frontendSkill.map(singleSkill => <SingleSkill singleSkill={singleSkill}></SingleSkill>)
                    }
                </div>
            </div>
            <div className='mb-6 lg:mb-10'>
                <div className='mt-6 lg:mt-12 mb-6 flex items-center'>
                    <div className='w-8 h-1 bg-[#10B981] rounded-full mr-4'></div>
                    <h3 className='font-semibold md:text-2xl text-[#10B981]'>Backend</h3>
                </div>
                <div className='flex flex-wrap gap-2 lg:gap-4 justify-center lg:justify-start'>
                    {
                        backendSkill.map(singleSkill => <SingleSkill singleSkill={singleSkill}></SingleSkill>)
                    }
                </div>
            </div>
            <div className='mb-6 lg:mb-10'>
                <div className='mt-6 lg:mt-12 mb-6 flex items-center'>
                    <div className='w-8 h-1 bg-[#10B981] rounded-full mr-4'></div>
                    <h3 className='font-semibold md:text-2xl text-[#10B981]'>Database</h3>
                </div>
                <div className='flex flex-wrap gap-2 lg:gap-4 justify-center lg:justify-start'>
                    {
                        databaseSkill.map(singleSkill => <SingleSkill singleSkill={singleSkill}></SingleSkill>)
                    }
                </div>
            </div>
            <div className='mb-6 lg:mb-10'>
                <div className='mt-6 lg:mt-12 mb-6 flex items-center'>
                    <div className='w-8 h-1 bg-[#10B981] rounded-full mr-4'></div>
                    <h3 className='font-semibold md:text-2xl text-[#10B981]'>Tools</h3>
                </div>
                <div className='flex flex-wrap gap-2 lg:gap-4 justify-center lg:justify-start'>
                    {
                        toolsSkills.map(singleSkill => <SingleSkill singleSkill={singleSkill}></SingleSkill>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;