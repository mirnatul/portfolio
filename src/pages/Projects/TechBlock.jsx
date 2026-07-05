import React from 'react';

const TechBlock = ({ title }) => {
    return (
        <div className='border px-[8px] py-[3px] rounded-lg text-sm font-semibold border-[#10B981] bg-green-50'>
            {title}
        </div>
    );
};

export default TechBlock;