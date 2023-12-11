import { IoIosHome } from "react-icons/io";
import { IoPerson, IoBook } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Introduction from "./pages/Introduction";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

function App() {

  return (
    <div className='flex w-11/12 mx-auto'>
      <div className='flex flex-col items-center min-h-screen p-3 uppercase lg:w-1/3 md:w-1/5 bg-sky-700'>
        <a className="block mb-10 text-center text-white cursor-pointer font-cinzel">
          <h1 className='text-2xl font-extrabold'>swiftscan</h1>
        </a>
        <ul className='my-10 space-y-2'>
          <li data-tip="Introduction">
            <Link to={"/introduction"} className='flex items-center gap-3 text-base px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'>
              <IoIosHome />
            </Link>
          </li>
          <li data-tip="About">
            <Link to={"/about"} className='flex items-center gap-3 text-base px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'>
              <IoPerson />
            </Link>
          </li>
          <li data-tip="Skills">
            <Link to={"/skills"} className='flex items-center gap-3 text-base px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'>
              <FaTools />
            </Link>
          </li>
          <li data-tip="Services">
            <Link to={"/services"} className='flex items-center gap-3 text-base px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'>
              <MdMiscellaneousServices />
            </Link>
          </li>
          <li data-tip="Portfolio">
            <Link to={"/portfolio"} className='flex items-center gap-3 text-base px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'>
              <FaFolderOpen />
            </Link>
          </li>
          <li data-tip="Education">
            <Link to={"/education"} className='flex items-center gap-3 text-base px-4 tooltip hover:bg-[#0830A5] tooltip-bottom btn  btn-outline rounded-full'>
              <IoBook />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-20 py-20 space-y-24">
        <Introduction></Introduction>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Portfolio></Portfolio>
      </div>
    </div>
  )
}

export default App
