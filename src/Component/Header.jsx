import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' mx-auto' style={{backgroundImage: "url(https://i.ibb.co/J30g8mN/15.jpg)"}}>
            <div>
                <div className='text-center'>
                    <button className='btn btn-ghost '>
                        <img className='w-10' src="/logo1.png" alt="" />
                        <h2 className='text-2xl text-white'>Espresso Emporium</h2>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;