import { IoBook } from "react-icons/io5";


const Education = () => {
    return (
        <div className="ml-10">
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-sky-700'>
                <IoBook />
                <h1 className='font-medium uppercase'>Education</h1>
            </button>
            <div className='px-3 py-3 space-y-5 border-2 rounded-lg bg-base-200 hover:border-sky-700'>
                <h1 className='text-2xl font-semibold'>Shahjalal University of Science and Technology, Sylhet</h1>
                <h1 className='text-lg font-medium'>Physics</h1>
                <p>2015-2023</p>
            </div>
        </div>
    );
};

export default Education;