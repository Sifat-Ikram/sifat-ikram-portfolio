import photo from "../assets/for_cv.jpg"
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="md:fixed md:w-1/4 lg:py-14 md:py-8 lg:px-10 md:px-2 bg-[#233bb1] dark:bg-dark dark:border-r-2 border-solid border-white">
      <div className="flex flex-col items-center mb-5">
        <h1 className="block mb-3 text-3xl font-semibold text-center text-white uppercase lg:font-bold">
          MD. SIFAT IKRAM
        </h1>
        <h1 className="mb-10 text-xl font-semibold text-center text-white">
          MERN Stack Developer
        </h1>
        <img src={photo} className="w-4/5 rounded-xl" alt="" />
      </div>
      <div className="py-2 mx-auto text-white max-md:space-y-4 md:space-y-3 lg:space-y-4 max-md:w-4/5">
        <h1 className="text-xl font-semibold ">Contact Info:</h1>
        <p className="text-xl">
          Address: <span className="text-lg">Dhaka, Bangladesh</span>
        </p>
        <p className="text-xl">
          Email:<span className="text-lg">sifatikram@gmail.com</span>
        </p>
        <p className="text-xl">
          Phone: <span className="text-lg">+8801718837796</span>
        </p>
        <p className="text-xl">Contact links:</p>
        <div className="flex items-center justify-between w-3/5 gap-2 pb-10 md:justify-evenly">
          <a
            className="text-2xl hover:text-gray-300"
            href="https://www.facebook.com/sifat.ikram"
          >
            <ImFacebook2 />
          </a>
          <a
            className="text-2xl hover:text-gray-300"
            href="https://www.linkedin.com/in/sifat-ikram-17011713a/"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-2xl hover:text-gray-300"
            href="https://github.com/Sifat-Ikram"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
