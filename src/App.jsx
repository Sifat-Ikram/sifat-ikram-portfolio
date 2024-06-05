import { IoIosHome } from "react-icons/io";
import { IoPerson, IoBook, IoMailOpenSharp } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import photo from "./assets/for_cv.jpg";
import Introduction from "./pages/Introduction";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import { GiHamburgerMenu } from "react-icons/gi";
import { Element, Link } from 'react-scroll';
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='md:flex'>
      <div className='md:fixed md:w-1/4 lg:py-16 md:py-8 lg:px-10 md:px-2 bg-[#041C93]'>
        <div className="flex flex-col items-center mb-5">
          <h1 className='block mb-3 text-3xl font-semibold text-center text-white uppercase lg:font-bold'
          >MD. SIFAT IKRAM</h1>
          <h1 className="mb-10 text-xl font-semibold text-center text-white">MERN Stack Developer</h1>
          <img src={photo} className="w-4/5 rounded-xl" alt="" />
        </div>
        <div className="py-2 mx-auto text-white max-md:space-y-4 md:space-y-3 lg:space-y-4 max-md:w-4/5">
          <h1 className="text-xl font-semibold ">Contact Info:</h1>
          <p className="text-xl">Address: <span className="text-lg">Dhaka, Bangladesh</span></p>
          <p className="text-xl">Email:<span className="text-lg">sifatikram@gmail.com</span></p>
          <p className="text-xl">Phone: <span className="text-lg">+8801718837796</span></p>
          <p className="text-xl">Contact links:</p>
          <div className="flex items-center justify-between w-3/5 gap-2 pb-10 md:justify-evenly">
            <a className="text-2xl hover:text-gray-300" href="https://www.facebook.com/sifat.ikram">
              <ImFacebook2 />
            </a>
            <a className="text-2xl hover:text-gray-300" href="https://www.linkedin.com/in/sifat-ikram-17011713a/">
              <FaLinkedin />
            </a>
            <a className="text-2xl hover:text-gray-300" href="https://github.com/Sifat-Ikram">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 md:flex md:ml-72 lg:ml-96">
        <div className="w-11/12 py-20 mx-auto space-y-24 lg:ml-10">
          <Element name="introduction"><Introduction></Introduction></Element>
          <div data-aos="fade-up">
            <Element name="about"><About></About></Element>
          </div>
          <div data-aos="fade-up">
            <Element name="skills"><Skills></Skills></Element>
          </div>
          <div data-aos="fade-up">
            <Element name="services"><Services></Services></Element>
          </div>
          <div data-aos="fade-up">
            <Element name="projects"><Portfolio></Portfolio></Element>
          </div>
          <div data-aos="fade-up">
            <Element name="education"><Education></Education></Element>
          </div>
          <div data-aos="fade-up">
            <Element name="contact"><Contact></Contact></Element>
          </div>
        </div>
        <div className="fixed right-5">
          <button onClick={toggleDrawer} className="mt-40 text-[#041C93] hover:text-white hover:bg-[#041C93] bg-gray-200 btn border-[#041C93] hover:border-white"><GiHamburgerMenu></GiHamburgerMenu></button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            style={{
              width: '80px',
              backgroundColor: "white"
            }}
          >
            <ul className="w-4/5 mx-auto mt-10 space-y-5">
              <Link to="introduction" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#041C93] border-[#041C93] hover:border-white tooltip-bottom btn  btn-outline rounded-full'
                spy={true}
                smooth={true}
                offset={50}
                duration={500} data-tip="Introduction">
                <IoIosHome />
              </Link>
              <Link to="about" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#041C93] border-[#041C93] hover:border-white tooltip-bottom btn  btn-outline rounded-full'
                spy={true}
                smooth={true}
                offset={50}
                duration={500} data-tip="About">
                <IoPerson />
              </Link>
              <Link to="skills" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#041C93] border-[#041C93] hover:border-white tooltip-bottom btn  btn-outline rounded-full'
                spy={true}
                smooth={true}
                offset={50}
                duration={500} data-tip="Skills">
                <FaTools />
              </Link>
              <Link to="services" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#041C93] border-[#041C93] hover:border-white tooltip-bottom btn  btn-outline rounded-full'
                spy={true}
                smooth={true}
                offset={50}
                duration={500} data-tip="Services">
                <MdMiscellaneousServices />
              </Link>
              <Link to="projects" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#041C93] border-[#041C93] hover:border-white tooltip-bottom btn  btn-outline rounded-full'
                spy={true}
                smooth={true}
                offset={50}
                duration={500} data-tip="Projects">
                <FaFolderOpen />
              </Link>
              <Link to={"education"} className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#041C93] border-[#041C93] hover:border-white tooltip-bottom btn  btn-outline rounded-full'
                spy={true}
                smooth={true}
                offset={50}
                duration={500} data-tip="Education">
                <IoBook />
              </Link>
              <Link to="contact" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#041C93] border-[#041C93] hover:border-white tooltip-bottom btn  btn-outline rounded-full'
                spy={true}
                smooth={true}
                offset={50}
                duration={500} data-tip="contact">
                <IoMailOpenSharp />
              </Link>
            </ul>
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default App;
