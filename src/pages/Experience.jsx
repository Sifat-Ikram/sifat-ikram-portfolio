import Aos from "aos";
import { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa6";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="space-y-8">
      <button className="flex items-center shadow bg-base-300 dark:border-[2px] border-solid border-white dark:hover:bg-white dark:hover:text-dark dark:bg-dark dark:text-white gap-2 px-4 py-2 mb-5 rounded-full cursor-pointer hover:text-white hover:bg-[#041C93]">
        <FaLaptopCode />
        <h1 className="font-medium uppercase">Education</h1>
      </button>
      <div data-aos="flip-up">
        <div className="px-3 py-3 shadow space-y-3 rounded-lg bg-base-200 dark:bg-dark dark:border-[2px] border-solid border-white hover:border-[#233bb1]">
          <h1 className="text-2xl font-semibold">RedTilt Solutions Ltd</h1>
          <h1 className="text-xl font-semibold">MERN Stack developer</h1>
          <h1 className="text-base font-medium">
            1st December, 2024 - present
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
