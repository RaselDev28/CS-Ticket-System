import React from 'react';

const Banner = () => {
    return (
        <div className="px-2 max-w-300 mx-auto flex flex-col sm:flex-row gap-5 py-15">
            <div className="bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[10px] text-white text-4xl font-bold w-full py-30 items-center justify-center text-center">
                <p>In-Progress</p>
            </div>
            <div className="bg-[linear-gradient(45deg,#54CF68_0%,#00827A_100%)] rounded-[10px] text-white text-4xl font-bold w-full py-30 items-center justify-center text-center">
                <p>Resolved</p>
            </div>
        </div>
    );
};

export default Banner;