import React from "react";

const SingleSkill = ({ singleSkill }) => {
    const { name, logo } = singleSkill;

    console.log(name);

    return (
        <div className="border-2 w-36 h-36 flex flex-col items-center justify-center rounded-lg shadow-sm hover:shadow-xl hover:pb-1">
            <img src={logo} className="w-14 mb-3" alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default SingleSkill;