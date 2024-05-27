import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {

  const location = useLocation();
  const showNav = ['/', '/single', '/write'].includes(location.pathname);

  if (!showNav) return null;

  return (
    <div className='ml-5 mr-6'>
      <div className='flex justify-between p-5 items-center'>
        <div>
          <a href='/home' className='font-logoHeading text-7xl text-pink-950 pl-19'>Let's Blog</a>
        </div>
        <div className='flex gap-9 items-center'>
          <Link className='font-nav text-xl hover:text-[#987070]' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='font-nav text-xl hover:text-[#987070]' to='/?cat=fashion'>
            <h6>FASHION</h6>
          </Link>
          <Link className='font-nav text-xl hover:text-[#987070]' to='/?cat=food'>
            <h6>FOOD</h6>
          </Link>
          <Link className='font-nav text-xl hover:text-[#987070]' to='/?cat=lifestyle'>
            <h6>LIFESTYLE</h6>
          </Link>
          <Link className='font-nav text-xl hover:text-[#987070]' to='/?cat=technology'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='font-nav text-xl hover:text-[#987070]' to='/?cat=photography'>
            <h6>PHOTOGRAPHY</h6>
          </Link>
          <span className='cursor-pointer'>Gugu</span>
          <span className='cursor-pointer'>Logout</span>
          <span className='cursor-pointer flex items-center justify-center bg-[#C39898] text-white text-lg rounded-full w-12 h-12 hover:bg-[#987070]'>
            <Link to='/write' className='flex items-center justify-center w-full h-full'>
              <i className='fa-solid fa-feather-pointed'></i>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Nav