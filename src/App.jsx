import { useEffect, useState } from "react";
import { IoIosHome } from "react-icons/io";
import { IoPerson, IoBook, IoMailOpenSharp } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaFolderOpen, FaTools } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Element } from "react-scroll";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Sidebar from "./pages/Sidebar";
import Introduction from "./pages/Introduction";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import NavigationLink from "./pages/NavigationLink";
import Experience from "./pages/Experience";
import { FaLaptopCode } from "react-icons/fa6";
import DarkModeButton from "./pages/DarkModeButton";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prevState) => !prevState);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="md:flex text-gray-800 dark:text-white dark:bg-dark">
      <Sidebar />
      <div className="flex-1 md:flex md:ml-72 lg:ml-[380px]">
        <div className="py-20 mx-auto space-y-24 dark:bg-dark">
          <Element name="introduction">
            <Introduction />
          </Element>

          <div data-aos="fade-up">
            <Element name="about">
              <About />
            </Element>
          </div>

          <div data-aos="fade-up">
            <Element name="experience">
              <Experience />
            </Element>
          </div>

          <div data-aos="fade-up">
            <Element name="skills">
              <Skills />
            </Element>
          </div>

          <div data-aos="fade-up">
            <Element name="services">
              <Services />
            </Element>
          </div>

          <div data-aos="fade-up">
            <Element name="projects">
              <Portfolio />
            </Element>
          </div>

          <div data-aos="fade-up">
            <Element name="education">
              <Education />
            </Element>
          </div>

          <div data-aos="fade-up">
            <Element name="contact">
              <Contact />
            </Element>
          </div>
        </div>

        {/* Drawer Navigation */}
        <div className="fixed right-5">
          <button
            onClick={toggleDrawer}
            className="mt-40 text-[#041C93] hover:text-white hover:bg-[#041C93] bg-gray-200 btn border-[#041C93] hover:border-white"
          >
            <GiHamburgerMenu />
          </button>
          <Drawer
            open={isDrawerOpen}
            onClose={toggleDrawer}
            direction="right"
            style={{ width: "fit-content", overflow: "visible" }}
          >
            <ul className="px-4 space-y-3 w-fit h-full flex flex-col justify-center items-center dark:bg-dark dark:text-white">
              <NavigationLink
                to="introduction"
                icon={IoIosHome}
                tooltip="Introduction"
              />
              <NavigationLink to="about" icon={IoPerson} tooltip="About" />
              <NavigationLink
                to="experience"
                icon={FaLaptopCode}
                tooltip="Experience"
              />
              <NavigationLink to="skills" icon={FaTools} tooltip="Skills" />
              <NavigationLink
                to="services"
                icon={MdMiscellaneousServices}
                tooltip="Services"
              />
              <NavigationLink
                to="projects"
                icon={FaFolderOpen}
                tooltip="Projects"
              />
              <NavigationLink
                to="education"
                icon={IoBook}
                tooltip="Education"
              />
              <NavigationLink
                to="contact"
                icon={IoMailOpenSharp}
                tooltip="Contact"
              />
              <DarkModeButton />
            </ul>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default App;
