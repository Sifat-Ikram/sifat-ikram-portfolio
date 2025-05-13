import { IoPerson } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <button className="flex items-center gap-2 px-4 py-2 mb-10 dark:border-[2px] border-solid border-white dark:bg-dark dark:hover:bg-white dark:hover:text-dark dark:text-white shadow bg-base-300 rounded-full cursor-pointer hover:text-white hover:bg-[#233bb1]">
        <IoPerson />
        <h1 className="font-medium uppercase">About Me</h1>
      </button>
      <div>
        <h1 className="mb-8 text-3xl font-semibold">
          Every great design begins with an even better story
        </h1>
        <h2 className="text-2xl w-11/12">
          I am a passionate and motivated web developer with a keen interest in
          creating dynamic and user-friendly websites. My journey into the world
          of web development started with a fascination for turning ideas into
          interactive and visually appealing digital experiences.
        </h2>
      </div>
      <a
        href="https://drive.google.com/file/d/1asvzZ-YuaYv1BvA4LD_uz1aqC7PydqDB/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 mt-10 text-xl font-semibold rounded-md dark:bg-dark dark:border-[2px] dark:hover:bg-white dark:hover:text-dark border-solid border-white text-white bg-[#233bb1] hover:bg-[#041C93]"
      >
        Download Resume
      </a>
    </div>
  );
};

export default About;
