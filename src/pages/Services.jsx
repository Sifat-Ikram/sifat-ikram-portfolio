import { MdMiscellaneousServices } from "react-icons/md";

const Services = () => {
    return (
        <div className="ml-10">
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-sky-700'>
                <MdMiscellaneousServices />
                <h1 className='font-medium uppercase'>Services</h1>
            </button>
            <h1 className='mb-10 text-4xl font-bold'>My Expertise</h1>
            <div className='mt-5 space-y-10'>
                <div className='border-2 border-solid rounded-lg shadow-md lg:px-10 md:px-6 py-7 hover:border-sky-700 bg-base-200'>
                    <h1 className='mb-5 text-3xl font-semibold'>Website Design</h1>
                    <p>I can create and design beautiful websites</p>
                </div>
                <div className='border-2 border-solid rounded-lg shadow-md lg:px-10 md:px-6 py-7 hover:border-sky-700 bg-base-200'>
                    <h1 className='mb-5 text-3xl font-semibold'>Front-end Development</h1>
                    <p>For being proficient in HTML, CSS, and JavaScript, I am specialized in creating seamless and responsive user interfaces</p>
                </div>
                <div className='border-2 border-solid rounded-lg shadow-md lg:px-10 md:px-6 py-7 hover:border-sky-700 bg-base-200'>
                    <h1 className='mb-5 text-3xl font-semibold'>Back-end Development</h1>
                    <p>Beside front-end development, I have enough skill in back-end with node.js, react-router, firebase authentication and Mongodb database</p>
                </div>
            </div>
        </div>
    );
};

export default Services;