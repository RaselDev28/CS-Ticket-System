import React from 'react';

const Navbar = () => {
    return (
        <div class="bg-white">
            <div class="navbar max-w-[1200px] mx-auto">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabindex="-1"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>FAQ</a></li>
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>Home</a></li>
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>Changelog</a></li>
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>Blog</a></li>
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>Download</a></li>
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <a class="text-xl font-bold">CS — Ticket System</a>
                </div>

                <div class="navbar-end">
                    <div class="hidden lg:flex">
                        <ul class="menu menu-horizontal px-1">
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>FAQ</a></li>
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>Home</a></li>
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>Changelog</a></li>
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>Blog</a></li>
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>Download</a></li>
                            <li class="hover:bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] rounded-[5px]"><a class="hover:text-white" href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <a class="btn bg-[linear-gradient(45deg,#632EE3_0%,#9F62F2_100%)] text-white">+ New Ticket</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;