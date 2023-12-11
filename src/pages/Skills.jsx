import React from 'react';
import { FaTools } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiFirebase } from "react-icons/si";

const Skills = () => {
    return (
        <div>
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-sky-700'>
                <FaTools />
                <h1 className='font-medium uppercase'>My Skills</h1>
            </button>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center justify-between h-40 gap-5 p-10 border-2 border-solid rounded-full cursor-pointer w-28 hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <IoLogoHtml5 />
                        </div>
                        <h1 className='text-3xl font-bold'>100%</h1>
                    </div>
                    <h1 className='text-3xl font-semibold'>HTML5</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center justify-between h-40 gap-5 p-10 border-2 border-solid rounded-full cursor-pointer w-28 hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <IoLogoCss3 />
                        </div>
                        <h1 className='text-3xl font-bold'>100%</h1>
                    </div>
                    <h1 className='text-3xl font-semibold'>CSS3</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center justify-between h-40 gap-5 p-10 border-2 border-solid rounded-full cursor-pointer w-28 hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <TbBrandJavascript />
                        </div>
                        <h1 className='text-3xl font-bold'>99%</h1>
                    </div>
                    <h1 className='text-3xl font-semibold'>JavaScript</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center justify-between h-40 gap-5 p-10 border-2 border-solid rounded-full cursor-pointer w-28 hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <RiReactjsLine />
                        </div>
                        <h1 className='text-3xl font-bold'>98%</h1>
                    </div>
                    <h1 className='text-3xl font-semibold'>React Js</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center justify-between h-40 gap-5 p-10 border-2 border-solid rounded-full cursor-pointer w-28 hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <IoLogoNodejs />
                        </div>
                        <h1 className='text-3xl font-bold'>95%</h1>
                    </div>
                    <h1 className='text-3xl font-semibold'>Node Js</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center justify-between h-40 gap-5 p-10 border-2 border-solid rounded-full cursor-pointer w-28 hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <SiMongodb />
                        </div>
                        <h1 className='text-3xl font-bold'>93%</h1>
                    </div>
                    <h1 className='text-3xl font-semibold'>MongoDb</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center justify-between h-40 gap-5 p-10 border-2 border-solid rounded-full cursor-pointer w-28 hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <SiFirebase />
                        </div>
                        <h1 className='text-3xl font-bold'>100%</h1>
                    </div>
                    <h1 className='text-3xl font-semibold'>Firebase</h1>
                </div>
            </div>
        </div>
    );
};

export default Skills;