import React from 'react'
import { useLocation } from 'react-router-dom';

const Nav = () => {

  const location = useLocation();
  const showNav = ['/', '/single', '/write'].includes(location.pathname);

  if (!showNav) return null;

  return (
    <div>Nav</div>
  )
}

export default Nav