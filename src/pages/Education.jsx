import { IoBook } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {

    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, []);

    return (
        <div>
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-sky-700'>
                <IoBook />
                <h1 className='font-medium uppercase'>Education</h1>
            </button>
            <div data-aos="flip-up">
                <div className='px-3 py-3 space-y-5 border-2 rounded-lg bg-base-200 hover:border-sky-700'>
                    <h1 className='text-2xl font-semibold'>Shahjalal University of Science and Technology, Sylhet</h1>
                    <h1 className='text-lg font-medium'>Physics</h1>
                    <p>2015-2023</p>
                </div>
            </div>
        </div>
    );
};

export default Education;