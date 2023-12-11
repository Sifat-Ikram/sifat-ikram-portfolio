import React from 'react';
import { IoIosHome } from "react-icons/io";

const Introduction = () => {
    return (
        <div>
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-sky-700'>
                <IoIosHome />
                <h1 className='font-medium uppercase'>Introduction</h1>
            </button>
            <div>
                <h1 className='mb-5 text-3xl font-semibold'><span>Hello, I am</span></h1>
                <h1 className='mb-5 font-bold text-7xl'>Md. Sifat Ikram</h1>
                <h1 className='text-5xl font-semibold'>Web developer</h1>
                <p className='mt-10 text-xl'>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
            </div>
        </div>
    );
};

export default Introduction;