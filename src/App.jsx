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
    <div className='flex justify-between'>
      <div className='fixed w-4/12 min-h-screen pb-5 md:w-1/4 lg:py-16 md:py-10 lg:px-10 md:px-5 bg-sky-700'>
        <div className="flex flex-col items-center mb-5">
          <h1 className='block mb-3 text-xs font-normal text-center text-white uppercase lg:font-bold md:font-semibold md:text-lg lg:text-3xl'
          >Md. Sifat Ikram</h1>
          <h1 className="mb-10 text-xs font-semibold text-center text-white md:text-base lg:text-xl">Web Developer</h1>
          <img src={photo} className="w-4/5 rounded-xl" alt="" />
        </div>
        <div className="p-2 space-y-4 text-white">
          <h1 className="text-xs font-semibold lg:text-xl md:text-sm">Contact Info:</h1>
          <p className="text-xs lg:text-xl md:text-sm">Address: <span className="text-xs lg:text-lg md:text-sm">Dhaka, Bangladesh</span></p>
          <p className="text-xs lg:text-xl md:text-sm">Email: <span className="lg:text-lg md:text-xs">sifatikram@gmail.com</span></p>
          <p className="text-xs lg:text-xl md:text-sm">Phone: <span className="text-xs lg:text-lg md:text-sm">+8801718837796</span></p>
          <p className="text-xs lg:text-xl md:text-sm">Contact links:</p>
          <div className="flex items-center justify-between w-3/5 gap-2 pb-10 md:justify-evenly">
            <a className="text-xl" href="https://www.facebook.com/sifat.ikram">
              <ImFacebook2 />
            </a>
            <a className="text-2xl" href="https://www.linkedin.com/in/sifat-ikram-17011713a/">
              <FaLinkedin />
            </a>
            <a className="text-2xl" href="https://github.com/Sifat-Ikram">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="w-3/5 py-20 mx-auto space-y-24 md:px-8 lg:px-20">
        <Element className="ml-3 md:ml-12 lg:ml-20" name="introduction"><Introduction></Introduction></Element>
        <div data-aos="fade-up">
          <Element className="ml-3 md:ml-12 lg:ml-20" name="about"><About></About></Element>
        </div>
        <div data-aos="fade-up">
          <Element className="ml-3 md:ml-12 lg:ml-20" name="skills"><Skills></Skills></Element>
        </div>
        <div data-aos="fade-up">
          <Element className="ml-3 md:ml-12 lg:ml-20" name="services"><Services></Services></Element>
        </div>
        <div data-aos="fade-up">
          <Element className="ml-3 md:ml-12 lg:ml-20" name="portfolio"><Portfolio></Portfolio></Element>
        </div>
        <div data-aos="fade-up">
          <Element className="ml-3 md:ml-12 lg:ml-20" name="education"><Education></Education></Element>
        </div>
        <div data-aos="fade-up">
          <Element className="ml-3 md:ml-12 lg:ml-20" name="contact"><Contact></Contact></Element>
        </div>
      </div>
      <div className="fixed">
        <button onClick={toggleDrawer} className="fixed mt-40 text-gray-900 bg-gray-200 right-5 btn"><GiHamburgerMenu></GiHamburgerMenu></button>
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
            <Link to="introduction" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'
              spy={true}
              smooth={true}
              offset={50}
              duration={500} data-tip="Introduction">
              <IoIosHome />
            </Link>
            <Link to="about" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'
              spy={true}
              smooth={true}
              offset={50}
              duration={500} data-tip="About">
              <IoPerson />
            </Link>
            <Link to="skills" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'
              spy={true}
              smooth={true}
              offset={50}
              duration={500} data-tip="Skills">
              <FaTools />
            </Link>
            <Link to="services" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'
              spy={true}
              smooth={true}
              offset={50}
              duration={500} data-tip="Services">
              <MdMiscellaneousServices />
            </Link>
            <Link to="portfolio" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'
              spy={true}
              smooth={true}
              offset={50}
              duration={500} data-tip="Portfolio">
              <FaFolderOpen />
            </Link>
            <Link to={"education"} className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'
              spy={true}
              smooth={true}
              offset={50}
              duration={500} data-tip="Education">
              <IoBook />
            </Link>
            <Link to="contact" className='flex items-center gap-3 text-3xl px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'
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
  )
}

export default App
