import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <>
    <div style={{backgroundImage: "url(https://i.ibb.co/ZcktFSH/13.jpg)"}}>
      <div className="container px-2 mx-auto py-4  md:py-12">
        <div>
          <img className="w-14" src="./logo1.png" alt="" />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4 ">
                <h2 className="text-2xl font-bold">Espresso Emporium</h2>
                <p>Always ready to be your friend. Come & Contact with us to share your memorable <br /> moments, to share with your best companion.</p>
                <div className="flex items-center gap-2 text-2xl">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
                </div>
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <div >
                    <p className="flex items-center gap-4"><FaPhone /> +0008****** </p>
                    <p className="flex items-center gap-4"><CiMail /> info@gmail.com </p>
                    <p className="flex items-center gap-4"><FaLocationDot /> Gazipur, Dhaka </p>
                    
                </div>
            </div>
            <div className="space-y-4 text-center">
                <h2 className="text-2xl font-bold">Connect with Us</h2>
                <form className="flex flex-col items-center">
                    <input className=" p-2 w-[250px] ronded outline-2 outline-[#E3B577]" type="text" name="" placeholder="Name" />
                    <input className="ronded outline-2 outline-[#E3B577] p-2 w-[250px] my-2" type="text" name="" placeholder="Email" />
                    <textarea  className="w-[250px] ronded outline-2 outline-[#E3B577] p-2 block " name="" placeholder="message" id=""></textarea>
                    <input className="border-2  mt-4 border-black p-2 font-bold rounded-full" type="submit" value="Send Messsage" />
                </form>
            </div>
        </div>
      </div>
    </div>
    <div style={{backgroundImage: "url(https://i.ibb.co/cQ3tyW1/24.jpg)"}}>
          <p className="text-center text-white text-sm font-light py-2">© 2024 Yousof ALi. All rights reserved.
          </p>
    </div>
    </>
  );
};

export default Footer;
