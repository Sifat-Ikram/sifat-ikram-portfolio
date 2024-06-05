import { MdMiscellaneousServices } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <button className="flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-[#041C93]">
        <MdMiscellaneousServices />
        <h1 className="font-medium uppercase">Services</h1>
      </button>
      <h1 className="mb-10 text-4xl font-bold">My Expertise</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom">
          <div className="border-2 border-solid rounded-lg shadow-md p-6 hover:border-[#041C93] bg-base-200">
            <h1 className="mb-3 text-2xl font-semibold">Website Design</h1>
            <p className="text-lg text-gray-700">
              Crafting visually stunning and user-friendly websites tailored to
              your needs.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <div className="border-2 border-solid rounded-lg shadow-md p-6 hover:border-[#041C93] bg-base-200">
            <h1 className="mb-3 text-2xl font-semibold">
              Front-end Development
            </h1>
            <p className="text-lg text-gray-700">
              Utilizing cutting-edge technologies like ReactJS, Tailwind CSS,
              and Material UI to build seamless and responsive user interfaces.
            </p>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-anchor-placement="top-center">
          <div className="border-2 border-solid rounded-lg shadow-md p-6 hover:border-[#041C93] bg-base-200">
            <h1 className="mb-3 text-2xl font-semibold">
              Back-end Development
            </h1>
            <p className="text-lg text-gray-700">
              Expertise in back-end technologies such as Node.js, Express.js,
              JWT, and MongoDB to develop robust and scalable server-side
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
