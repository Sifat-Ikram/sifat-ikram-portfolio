import { IoIosHome } from "react-icons/io";

const Introduction = () => {
    return (
        <div>
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-[#041C93]'>
                <IoIosHome />
                <h1 className='font-medium uppercase'>Introduction</h1>
            </button>
            <div>
                <h1><span className='mb-5 text-3xl font-semibold lg:text-5xl'>Say Hello from
                    <span className='font-bold uppercase'> Md. Sifat Ikram, </span>
                    MERN Stack developer</span></h1>
            </div>
        </div>
    );
};

export default Introduction;