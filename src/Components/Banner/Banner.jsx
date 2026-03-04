import React from 'react';

const Banner = ({ progressCount, resolvedCount }) => {
    return (
        <div className="px-2 max-w-7xl mx-auto flex flex-col sm:flex-row gap-5 py-10">
            <div className="bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[10px] text-white w-full py-25 flex flex-col items-center justify-center shadow-lg">
                <p className="text-xl opacity-80">In-Progress</p>
                <h1 className="text-6xl font-bold">{progressCount}</h1>
            </div>
            <div className="bg-[linear-gradient(45deg,#54CF68_0%,#00827A_100%)] rounded-[10px] text-white w-full py-25 flex flex-col items-center justify-center shadow-lg">
                <p className="text-xl opacity-80">Resolved</p>
                <h1 className="text-6xl font-bold">{resolvedCount}</h1>
            </div>
        </div>
    );
};

export default Banner;