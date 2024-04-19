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
        <div className="container mx-auto py-12 px-4">
            <button className="flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-[#121A90]">
                <IoMailOpenSharp />
                <h1 className="font-medium uppercase">Contact</h1>
            </button>
            <div>
                <h1 className="mb-10 text-4xl font-bold">Contact Me</h1>
                <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div data-aos="fade-up">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea input-bordered" name='message' placeholder="Type your message here..."></textarea>
                        </div>
                    </div>
                    <div data-aos="flip-up">
                        <div className="mt-6 form-control">
                            <button type='submit' className="btn bg-[#121A90] text-white font-semibold hover:bg-[#0E164C]">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
