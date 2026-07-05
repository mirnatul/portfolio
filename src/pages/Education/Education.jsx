import React from 'react';
import TechBlock from '../Projects/TechBlock';

const universitySkill = ["Software Engineering", "Data Structures", "Algorithms", "Database Management", "Web Development", "Operating Systems", "Computer Networks", "Artificial Intelligence", "Machine Learning", "Cybersecurity"];
const collegeSkill = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Bangla", "ICT"];

const Education = () => {
    return (
        <div id='skills' className='mt-16 lg:mt-32 skills text-center lg:text-left scroll-mt-48 max-w-[1100px] px-4 mx-auto'>
            <h2 className='text-[#10B981] [-webkit-text-stroke:1px_black] font-bold text-3xl lg:text-5xl text-center mb-0 lg:mb-16 mx-auto'>Education .</h2>
            <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-12 items-center max-w-[1400px] px-1 md:px-4 mx-auto'>
                {/* bsc */}
                <div className='border-2 p-2 md:p-10 rounded-lg shadow-lg'>
                    <div>
                        <h2 className='text-base md:text-2xl font-bold my-1'>BSc in Computer Science & Engineering</h2>
                        <p>Dhaka International University</p>
                    </div>
                    <div className='mt-2 mb-4'>
                        <p className='inline-block py-1 px-4 rounded-xl bg-slate-200 mb-2 mr-2'>2022 - August, 2026</p>
                        <p className='inline-block py-1 px-4 rounded-xl bg-slate-200'>CGPA: 3.80 out of 4</p>
                    </div>

                    <p>Pursuing a rigorous computer science curriculum with focus on algorithms, data structures, software engineering, and modern web systems. Currently maintaining a strong academic record while actively building production-grade applications.</p>
                    <div className='flex flex-wrap gap-2 mt-4 justify-center lg:justify-start'>
                        {
                            universitySkill.map((title, index) => (
                                <TechBlock title={title}></TechBlock>
                            ))
                        }
                    </div>
                </div>

                {/* hsc */}
                <div className='border-2 p-4 md:p-10 rounded-lg shadow-lg'>

                    <div>
                        <h2 className='text-lg md:text-2xl font-bold my-1'>Higher Secondary Certificate (HSC)</h2>
                        <p>Cantonment Public School & College, Rangpur</p>
                    </div>
                    <div className='mt-2 mb-4'>
                        <p className='inline-block py-1 px-4 rounded-xl bg-slate-200 mb-2 mr-2'>Completed</p>
                        <p className='inline-block py-1 px-4 rounded-xl bg-slate-200 mr-2'>GPA: 5.00</p>
                        <p className='inline-block py-1 px-4 rounded-xl bg-slate-200'>139th in Dinajpur Board</p>
                    </div>

                    <p>Completed HSC with Science group, building a strong foundation in Mathematics, Physics, and logical reasoning. Developed critical thinking and analytical skills through rigorous coursework.</p>
                    <div className='flex flex-wrap gap-2 mt-4 justify-center lg:justify-start'>
                        {
                            collegeSkill.map((title, index) => (
                                <TechBlock title={title}></TechBlock>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;