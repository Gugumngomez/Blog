import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const showFooter = ['/', '/single/*', '/write'].some(path => location.pathname.startsWith(path));

  if (!showFooter) return null;

  return (
    <footer className='ml-10 mr-10'>
      <div className='flex items-center justify-between p-6 bg-[#D8D9DA]'>
        <a href='/home' className='font-logoHeading text-3xl text-pink-950 pl-19'>Let's Blog</a>
        <span>
          Made with love and stuff and stuff
        </span>
      </div>
    </footer>
  )
}

export default Footer