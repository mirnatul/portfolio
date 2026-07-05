import React from 'react';

const TechBlockDetails = ({ title }) => {
    return (
        <div className='border px-2 md:px-[12px] py-2 md:py-[8px] rounded-lg text-sm font-semibold border-[#10B981] bg-green-50 mx-1'>
            <div className='flex items-center md:gap-1'>
                <img className='w-4 md:w-6' src={title[1]} alt="" />
                {title[0]}
            </div>
        </div>
    );
};

export default TechBlockDetails;