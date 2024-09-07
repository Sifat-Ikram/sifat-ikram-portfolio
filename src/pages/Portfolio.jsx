import { FaFolderOpen } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const projects = [
    {
      title: "Shop Sphere",
      image: "https://i.ibb.co.com/9nHs3FX/shop.png",
      description:
        "This is a ecommerce website. Any user can sign up and buy products from product page, can see the cart page, can use discount and make payment through Bkash. An admin can see, edit and delete any product or user. Admin can also make a user admin.",
      link: "https://shop-sphere-client-zeta.vercel.app",
      githubClient: "https://github.com/Sifat-Ikram/shop-sphere-client",
      githubServer: "https://github.com/Sifat-Ikram/shop-sphere-server",
    },
    {
      title: "Taste Trail",
      image: "https://i.ibb.co/sKjTfQ1/taste.png",
      description:
        "This is a restaurant website. Here a user can order a food item. Users can place an order for the ordered food item or can delete a food item from the cart in the shop page. An admin can add, update, and delete a food item and user.",
      link: "https://taste-trail-web.web.app/",
      githubClient: "https://github.com/Sifat-Ikram/taste-trail-client",
      githubServer: "https://github.com/Sifat-Ikram/taste-trail-server",
    },
    {
      title: "Career Hub",
      image: "https://i.ibb.co/gz640Mc/career.png",
      description:
        "This is a job hunting website. Anyone can sign in and apply for a job or internship. There are three routes: Admin routes, Employer routes, Employee routes.",
      link: "https://career-hub-web.web.app/",
      githubClient: "https://github.com/Sifat-Ikram/career-hub-client",
      githubServer: "https://github.com/Sifat-Ikram/career-hub-server",
    },
    {
      title: "Travel Beyond",
      image: "https://i.ibb.co/HDL7dFC/travel.png",
      description:
        "This is a travel website. Here a user can book or delete a tour package. An admin can add, update, and delete a tour package and delete and update a user.",
      link: "https://travel-beyond-web.web.app/",
      githubClient: "https://github.com/Sifat-Ikram/travel-beyond-client",
      githubServer: "https://github.com/Sifat-Ikram/travel-beyond-server",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <button className="flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-[#041C93]">
        <FaFolderOpen />
        <h1 className="font-medium uppercase">Projects</h1>
      </button>
      <div>
        <h1 className="text-4xl font-bold mb-6 text-center">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md bg-base-200 transition duration-300 transform hover:scale-105 shadow border-2 border-solid cursor-pointer p-1"
              data-aos="fade-up"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-md h-64 w-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
              <div className="absolute inset-0 flex py-5 flex-col items-center justify-center text-white bg-gradient-to-b from-transparent to-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-2xl font-bold mt-20">{project.title}</h1>
                <p className="mt-2 text-sm px-8">{project.description}</p>
                <div className="flex justify-center items-center mt-2 space-x-4 mb-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-white font-extrabold rounded-md transition duration-300 hover:text-slate-400"
                  >
                    Visit
                  </a>
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-white font-extrabold rounded-md transition duration-300 hover:text-slate-400"
                  >
                    Client Code
                  </a>
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-white font-extrabold rounded-md transition duration-300 hover:text-slate-400"
                  >
                    Server Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
