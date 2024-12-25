import { IoMailOpenSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import Aos from "aos";
import { useForm } from "react-hook-form";
import "aos/dist/aos.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const sendEmail = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <button className="flex items-center gap-2 px-4 py-2 mb-10 shadow dark:border-[2px] border-solid border-white dark:bg-dark dark:hover:bg-white dark:hover:text-dark dark:text-white bg-base-300 rounded-full cursor-pointer hover:text-white hover:bg-[#041C93]">
        <IoMailOpenSharp />
        <h1 className="font-medium uppercase">Contact</h1>
      </button>
      <div>
        <h1 className="mb-10 text-4xl font-bold">Contact Me</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit(sendEmail)}
          className="w-4/5 mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div data-aos="fade-up">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your full Name</span>
                </label>
                <input
                  type="text"
                  name="Full_Name"
                  placeholder="Full Name"
                  {...register("name", { required: "Full Name is required" })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 dark:text-white">{errors.name.message}</span>
                )}
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  {...register("email", { required: "Email is required" })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 dark:text-white">{errors.email.message}</span>
                )}
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea input-bordered"
                name="Message"
                placeholder="Type your message here..."
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 dark:text-white">{errors.message.message}</span>
              )}
            </div>
          </div>
          <div data-aos="flip-up">
            <div className="mt-6 form-control">
              <button
                type="submit"
                className="btn bg-[#233bb1] text-white dark:bg-dark dark:border-[2px] border-white border-solid font-semibold hover:bg-[#041C93]"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
