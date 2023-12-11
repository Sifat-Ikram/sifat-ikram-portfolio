import React from 'react';
import { IoPerson } from "react-icons/io5";

const About = () => {
    return (
        <div>
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-sky-700'>
                <IoPerson />
                <h1 className='font-medium uppercase'>About Me</h1>
            </button>
            <div>
                <h1 className='mb-8 text-4xl font-semibold'>
                    Every great design begin with an even better story
                </h1>
                <h2 className='text-2xl'>
                    I am a passionate and motivated  web developer with a keen interest in creating dynamic and user-friendly websites. My journey into the world of web development started with a fascination for turning ideas into interactive and visually appealing digital experiences.
                </h2>
            </div>
        </div>
    );
};

export default About;