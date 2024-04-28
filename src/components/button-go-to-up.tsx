import React, { useState, useEffect } from 'react';
import { ArrowUp } from './iconos';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <button
    className='btn rounded-circle btn-lg position-absolute bottom-0 end-0'
      id="back-to-top"
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
