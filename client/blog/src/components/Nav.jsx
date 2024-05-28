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
        <div className='flex gap-5 items-center'>
          <Link className='font-nav text-lg hover:text-[#61677A]' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='font-nav text-lg hover:text-[#61677A]' to='/?cat=fashion'>
            <h6>FASHION</h6>
          </Link>
          <Link className='font-nav text-lg hover:text-[#61677A]' to='/?cat=food'>
            <h6>FOOD</h6>
          </Link>
          <Link className='font-nav text-lg hover:text-[#61677A]' to='/?cat=lifestyle'>
            <h6>LIFESTYLE</h6>
          </Link>
          <Link className='font-nav text-lg hover:text-[#61677A]' to='/?cat=technology'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='font-nav text-lg hover:text-[#61677A]' to='/?cat=photography'>
            <h6>PHOTOGRAPHY</h6>
          </Link>
          <span className='cursor-pointer'>Gugu</span>
          <span className='cursor-pointer'>Logout</span>
          <span className='cursor-pointer flex items-center justify-center bg-[#61677A] text-white text-lg rounded-full w-12 h-12 hover:bg-[#272829]'>
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