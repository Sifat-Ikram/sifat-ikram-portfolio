import { useEffect } from "react";
import { FaTools } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import {
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandNextjs,
} from "react-icons/tb";
import {
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiVuedotjs,
  SiCodeclimate,
  SiRedux,
} from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div>
      <button className="flex items-center gap-2 dark:border-[2px] border-solid border-white dark:hover:bg-white dark:hover:text-dark dark:bg-dark dark:text-white px-4 py-2 mb-10 shadow bg-base-300 rounded-full cursor-pointer hover:text-white hover:bg-[#041C93]">
        <FaTools />
        <h1 className="font-medium uppercase">My Skills</h1>
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:grid-cols-4">
        <div data-aos="fade-right">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <TbBrandJavascript />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">JavaScript</h1>
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <TbBrandNextjs />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Next Js</h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <RiReactjsLine />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">React Js</h1>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <SiVuedotjs />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Vue Js</h1>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <IoLogoNodejs />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Node Js</h1>
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <SiExpress />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Express Js</h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <SiMongodb />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">MongoDb</h1>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <SiFirebase />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Firebase</h1>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <TbBrandTailwind />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Tailwind CSS</h1>
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <SiCodeclimate />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Material Ui</h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="flex flex-col items-center">
            <div className="p-10 shadow bg-base-300 dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white rounded-full cursor-pointer hover:bg-base-200">
              <div className="text-3xl font-bold">
                <SiRedux />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Redux</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
