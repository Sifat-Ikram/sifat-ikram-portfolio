import { IoPerson } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <button className="flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-[#041C93]">
        <IoPerson />
        <h1 className="font-medium uppercase">About Me</h1>
      </button>
      <div>
        <h1 className="mb-8 text-3xl font-semibold">
          Every great design begins with an even better story
        </h1>
        <h2 className="text-2xl">
          I am a passionate and motivated web developer with a keen interest in
          creating dynamic and user-friendly websites. My journey into the world
          of web development started with a fascination for turning ideas into
          interactive and visually appealing digital experiences.
        </h2>
      </div>
      <a
        href="https://drive.google.com/file/d/1ONvcsFzvND1lzS1bbp-t8ZGfsqGoDL8Y/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 mt-10 text-xl font-semibold rounded-md text-white bg-[#041C93]"
      >
        Download Resume
      </a>
    </div>
  );
};

export default About;
