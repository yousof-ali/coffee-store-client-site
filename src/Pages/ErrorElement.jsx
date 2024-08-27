import React from 'react';
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


const ErrorElement = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div className='flex justify-center items-center mt-4'>
                    <Link className='font-bold flex border-2 rounded-full p-2 items-center border-[#E3B577] hover:bg-[#331A15] hover:text-white  gap-2' to={'/'}><FaArrowLeft />
                    Back to Home</Link>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="/404.gif" alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorElement;