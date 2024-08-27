import React from 'react';
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import Button from '../Component/Button';


const ErrorElement = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div className='flex justify-center items-center mt-4'>
                    <Link to={'/'}><Button><FaArrowLeft /> Back to Home</Button></Link>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="/404.gif" alt="" />
                </div>
            </div>
            <Footer></Footer>
            {/* wkJkV0JdgQ1AdpAn? */}
            {/* coffeStore */}
        </div>
    );
};

export default ErrorElement;