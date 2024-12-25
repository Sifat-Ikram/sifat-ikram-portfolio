import { IoBook } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {

    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, []);

    return (
        <div className="space-y-8">
            <button className='flex items-center shadow bg-base-300 dark:border-[2px] border-solid border-white dark:bg-dark dark:hover:bg-white dark:hover:text-dark dark:text-white gap-2 px-4 py-2 mb-5 rounded-full cursor-pointer hover:text-white hover:bg-[#041C93]'>
                <IoBook />
                <h1 className='font-medium uppercase'>Education</h1>
            </button>
            <div data-aos="flip-up">
                <div className='px-3 py-3 mr-2 md:mr-4 shadow space-y-5 rounded-lg dark:bg-dark dark:border-[2px] border-solid border-white bg-base-200 hover:border-[#233bb1]'>
                    <h1 className='text-2xl font-semibold'>Shahjalal University of Science and Technology, Sylhet</h1>
                    <h1 className='text-lg font-medium'>Physics</h1>
                    <p>2015-2023</p>
                </div>
            </div>
            <div data-aos="flip-up">
                <div className='px-3 py-3 mr-2 md:mr-4 shadow space-y-5 rounded-lg dark:bg-dark dark:border-[2px] border-solid border-white bg-base-200 hover:border-[#233bb1]'>
                    <h1 className='text-2xl font-semibold'>Programming Hero</h1>
                    <h1 className='text-lg font-medium'>MERN Stack Development</h1>
                    <p>Year 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Education;