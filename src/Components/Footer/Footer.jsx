import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='bg-black mt-20'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 text-center md:grid-cols-5 md:text-left gap-6 py-20 footer-border'>
                <div>
                    <h1 className='pb-5'><a className='text-xl font-bold text-white' href="#">CS — Ticket System</a></h1>
                    <p className='text-[#A1A1AA]'>Customer satisfaction is our priority. From In-Progress to Resolved, we track every step of your journey. Managing tickets has never been this easy and transparent.</p>
                </div>
                <div>
                    <h2 className='text-xl font-bold text-white pb-5'>Company</h2>
                    <ul className='text-[#A1A1AA]'>
                        <li className='pb-4'><a href="#">About Us</a></li>
                        <li className='pb-4'><a href="#">Our Mission</a></li>
                        <li className='pb-4'><a href="#">Contact Saled</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold text-white pb-5'>Services</h2>
                    <ul className='text-[#A1A1AA]'>
                        <li className='pb-4'><a href="#">Products & Services</a></li>
                        <li className='pb-4'><a href="#">Customer Stories</a></li>
                        <li className='pb-4'><a href="#">Download Apps</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold text-white pb-5'>Information</h2>
                    <ul className='text-[#A1A1AA]'>
                        <li className='pb-4'><a href="#">Privacy Policy</a></li>
                        <li className='pb-4'><a href="#">Terms & Conditions</a></li>
                        <li className='pb-4'><a href="#">Join Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold text-white pb-5'>Social Links</h2>
                    <ul className='text-[#A1A1AA]'>
                        <li className='pb-4'>
                            < FontAwesomeIcon icon={faXTwitter} className="bg-white text-black rounded-full" />
                            <a href="#">  @CS — Ticket System</a></li>
                        <li className='pb-4'>
                            <FontAwesomeIcon icon={faLinkedinIn} className="bg-white text-black rounded-full" />
                            <a href="#"> @CS — Ticket System</a></li>
                        <li className='pb-4'>
                            <FontAwesomeIcon icon={faFacebookF} className="bg-white text-black rounded-full" />
                            <a href="#"> @CS — Ticket System</a></li>
                        <li className='pb-4'>
                            <FontAwesomeIcon icon={faEnvelope} className="bg-white text-black rounded-full" />
                            <a href="#">  support@cst.com</a></li>
                    </ul>
                </div>
            </div>
            <div className='pt-10'>
                <div className='text-center pb-10'>
                    <span class="text-white">&copy; CS — Ticket System. All rights reserved.</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;