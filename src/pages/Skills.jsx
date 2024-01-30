import { FaTools } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb";
import { SiFirebase, SiExpress, SiMongodb, SiVuedotjs } from "react-icons/si";

const Skills = () => {
    return (
        <div className="ml-10">
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-sky-700'>
                <FaTools />
                <h1 className='font-medium uppercase'>My Skills</h1>
            </button>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
                <div className='flex flex-col items-center'>
                    <div className='p-10 border-2 border-solid rounded-full cursor-pointer hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <TbBrandJavascript />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold'>JavaScript</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-10 border-2 border-solid rounded-full cursor-pointer hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <TbBrandTailwind />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold'>Tailwind CSS</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-10 border-2 border-solid rounded-full cursor-pointer hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <RiReactjsLine />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold'>React Js</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-10 border-2 border-solid rounded-full cursor-pointer hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <SiVuedotjs />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold'>Vue Js</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-10 border-2 border-solid rounded-full cursor-pointer hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <IoLogoNodejs />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold'>Node Js</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-10 border-2 border-solid rounded-full cursor-pointer hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <SiExpress />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold'>Express Js</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-10 border-2 border-solid rounded-full cursor-pointer hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <SiMongodb />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold'>MongoDb</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-10 border-2 border-solid rounded-full cursor-pointer hover:border-sky-700'>
                        <div className='text-3xl font-bold'>
                            <SiFirebase />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold'>Firebase</h1>
                </div>
            </div>
        </div>
    );
};

export default Skills;