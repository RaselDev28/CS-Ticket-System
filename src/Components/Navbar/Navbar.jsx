import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="navbar max-w-300 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>FAQ</a></li>
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>Home</a></li>
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>Changelog</a></li>
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>Blog</a></li>
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>Download</a></li>
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <a className="text-xl font-bold">CS — Ticket System</a>
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>FAQ</a></li>
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>Home</a></li>
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>Changelog</a></li>
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>Blog</a></li>
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>Download</a></li>
                            <li className="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a className="hover:text-white" href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] text-white">+ New Ticket</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;