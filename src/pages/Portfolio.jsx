import { FaFolderOpen } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {

    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, []);

    return (
        <div>
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-sky-700'>
                <FaFolderOpen />
                <h1 className='font-medium uppercase'>Portfolio</h1>
            </button>
            <div>
                <h1 className='text-4xl font-bold'>Featured Projects</h1>
                <div className='grid grid-cols-1 gap-3 mt-10 lg:grid-cols-2'>
                    <a data-aos="fade-up" className="py-5 space-y-5 border-2 border-solid rounded-md hover:border-sky-700 md:p-5 lg:p-7 bg-base-200" href='https://travel-beyond-web.web.app/'>
                        <h1 className='text-2xl font-semibold text-center text-sky-700'>Travel Beyond</h1>
                        <p>This is travel website.. Here an user can book or delete a tour package. An admin can add, update and delete a tour package and delete and update user.</p>
                    </a>
                    <a data-aos="fade-up" className="py-5 space-y-5 border-2 border-solid rounded-md hover:border-sky-700 md:p-5 lg:p-7 bg-base-200" href='https://swiftscan-diagnostics.web.app'>
                        <h1 className='text-2xl font-semibold text-center text-sky-700'>Swiftscan Diagnostics</h1>
                        <p>This is medical diagnostic website. Here an user can book or delete a test. An admin can add, update and delete a test. Admin can also delete an user.</p>
                    </a>
                    <a data-aos="fade-down" className="py-5 space-y-5 border-2 border-solid rounded-md hover:border-sky-700 md:p-5 lg:p-7 bg-base-200" href='https://job-hustle.web.app/'>
                        <h1 className='text-2xl font-semibold text-center text-sky-700'>JobHustle</h1>
                        <p>This is a job hunting website. Anyone can sign in and apply for a job</p>
                    </a>
                    <a data-aos="flip-up" className="py-5 space-y-5 border-2 border-solid rounded-md hover:border-sky-700 md:p-5 lg:p-7 bg-base-200" href='https://6533c61dbfae0c6c5b4fc7a9--wondrous-muffin-cf0e61.netlify.app/'>
                        <h1 className='text-2xl font-semibold text-center text-sky-700'>TechEon</h1>
                        <p>This is a ecommerce website where products from different company can be seen and ordered.</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;