import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer(){
    return <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
       <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        <div>
            <h1 className="text-[24px] text-white mb-[1rem] font-bold uppercase">Jobify</h1>
            <p className="text-[14px] text-white text-opacity-70">
            Each month,more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
            </p>
            <div className="mt-[1.5rem] flex items-center space-x-3">
                <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col">
                    <FaFacebook className="text-white"/>
                </div>
                <div className="w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col">
                    <FaTwitter className="text-white"/>
                </div>
                <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
                    <FaYoutube className="text-white"/>
                </div>
                <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col">
                    <FaInstagram className="text-white"/>
                </div>

            </div>
        </div>
        <div>
            <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">About Us</h1>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">Job</p>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">Privacy</p>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">Policy</p>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">Application</p>
        </div>

        <div>
            <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">Quick Links</h1>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">All Job</p>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">Job Details</p>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">How to Apply</p>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">Resume</p>
        </div>

        <div>
            <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">Get in Touch</h1>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">+91 989898765</p>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">jobify@gmail.com</p>
            <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">Delhi, India</p>
            
        </div>


       </div>
       <h1 className="mt-[2rem] text-[14px] w-[80%] text-white opacity-50 text-center">COPYRIGHT BY JOBIFY-2024</h1>
    </div>
}