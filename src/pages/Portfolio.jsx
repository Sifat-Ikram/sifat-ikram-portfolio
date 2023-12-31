import React from 'react';
import { FaFolderOpen } from "react-icons/fa6";

const Portfolio = () => {
    return (
        <div>
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-sky-700'>
                <FaFolderOpen />
                <h1 className='font-medium uppercase'>Portfolio</h1>
            </button>
            <div>
                <h1 className='text-4xl font-bold'>Featured Projects</h1>
                <div className='grid grid-cols-1 gap-3 mt-10 lg:grid-cols-2'>
                    <a className="space-y-5 border-2 border-solid rounded-md hover:border-sky-700 p-7 bg-base-200" href='https://job-hustle.web.app/'>
                        <h1 className='text-2xl font-semibold text-sky-700'>JobHustle</h1>
                        <p>This is a job hunting website. Anyone can sign in and apply for a job</p>
                    </a>
                    <a className="space-y-5 border-2 border-solid rounded-md hover:border-sky-700 p-7 bg-base-200" href='https://6533c61dbfae0c6c5b4fc7a9--wondrous-muffin-cf0e61.netlify.app/'>
                        <h1 className='text-2xl font-semibold text-sky-700'>TechEon</h1>
                        <p>This is a ecommerce website where products from different company can be seen and ordered.</p>
                    </a>
                    <a className="space-y-5 border-2 border-solid rounded-md hover:border-sky-700 p-7 bg-base-200" href='https://swiftscan-diagnostics.web.app/'>
                        <h1 className='text-2xl font-semibold text-sky-700'>SwiftScan</h1>
                        <p>This is medical diagnostic website. Here anyone can book a test after sign up.</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;