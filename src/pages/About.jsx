import { IoPerson } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";


const About = () => {
    const resumePdfPath = '/Md-Sifat-Resume.pdf'; // Path to resume PDF in public folder

    const handleDownloadClick = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = resumePdfPath;
        downloadLink.download = 'Md_Sifat_Ikram_Resume.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <div>
            <button className='flex items-center gap-2 px-4 py-2 mb-10 border-2 border-solid rounded-full cursor-pointer hover:text-white hover:bg-[#041C93]'>
                <IoPerson />
                <h1 className='font-medium uppercase'>About Me</h1>
            </button>
            <div>
                <h1 className='mb-8 text-3xl font-semibold'>
                    Every great design begin with an even better story
                </h1>
                <h2 className='mb-5 text-2xl'>
                    I am a passionate and motivated  web developer with a keen interest in creating dynamic and user-friendly websites. My journey into the world of web development started with a fascination for turning ideas into interactive and visually appealing digital experiences.
                </h2>
                <button onClick={handleDownloadClick} className='flex items-center gap-3 px-4 py-4 mt-8 font-semibold text-white bg-[#041C93] hover:bg-[#0E164C] rounded-xl'><FaCloudDownloadAlt className='text-lg' /> <span className="text-xl">Download Resume</span></button>
            </div>
        </div>
    );
};

export default About;