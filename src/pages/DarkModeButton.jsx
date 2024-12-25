import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative text-2xl cursor-pointer tooltip hover:bg-[#041C93] text-[#041C93] hover:text-white dark:hover:border-none dark:border-none dark:text-dark dark:hover:bg-dark dark:hover:text-white bg-white border-[1px] border-solid p-[10px] border-[#041C93] tooltip-left rounded-full"
      onClick={() => setDarkMode(!darkMode)}
      data-tip="mode"
    >
      <FaMoon
        className={`${darkMode ? "block" : "hidden"}`}
        size={18}
      />
      <IoSunny
        className={`text-9xl ${darkMode ? "hidden" : "block"}`}
        size={18}
      />
    </div>
  );
};

export default DarkModeButton;
