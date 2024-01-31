import { IoMailOpenSharp } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    const form = useRef();

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_domwr0l', 'template_gnnl8ol', form.current, 'C6gWlqr-Sf1AbAQUH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className="ml-10">
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-sky-700'>
                <IoMailOpenSharp />
                <h1 className='font-medium uppercase'>Contact</h1>
            </button>
            <div>
                <h1 className='mb-10 text-4xl font-bold'>Contact Me</h1>
                <form className="" ref={form} onSubmit={sendEmail} >
                    <div className='items-center gap-20 lg:flex'>
                        <div data-aos="fade-right">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full Name" className="w-full input input-bordered" required />
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="w-full input input-bordered" required />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea input-bordered" name='message'></textarea>
                        </div>
                    </div>
                    <div data-aos="flip-up">
                        <div className="mt-6 form-control">
                            <button type='submit' className="font-semibold text-white btn bg-sky-700 hover:bg-sky-700 hover:text-white">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;