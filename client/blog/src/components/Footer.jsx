import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const showFooter = ['/', '/single', '/write'].includes(location.pathname);

  if (!showFooter) return null;

  return (
    <div>Footer</div>
  )
}

export default Footer