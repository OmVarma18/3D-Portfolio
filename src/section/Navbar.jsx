import React, { useState } from 'react';
// Corrected framer-motion import
import { motion, AnimatePresence } from 'motion/react';

function Navigation({ onNavLinkClick }) {
  // Utility function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    onNavLinkClick(); // Close mobile menu after click
  };

  return (
    <ul className='nav-ul'>
      <li className='nav-li'>
        <a className='nav-link' href='#hero' onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href='#about' onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
      </li>
      {/* If you add a projects section back, uncomment this and ensure it has id="projects" */}
      {/* <li className='nav-li'>
        <a className='nav-link' href='#projects' onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
      </li> */}
      <li className='nav-li'>
        <a className='nav-link' href='#contact' onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href='#social' onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>Social</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Using useState from React directly

  // Function to close the mobile navigation
  const closeMobileNav = () => {
    setIsOpen(false);
  };

  // Prepend BASE_URL to the menu/close icon paths
  const menuIconPath = `${import.meta.env.BASE_URL}assets/menu.svg`;
  const closeIconPath = `${import.meta.env.BASE_URL}assets/close.svg`;

  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          {/* Prepend BASE_URL to the href for the home link if needed for routing */}
          <a href={import.meta.env.BASE_URL} className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>Om's Portfolio</a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'
          >
            <img src={isOpen ? closeIconPath : menuIconPath} className="w-6 h-6" alt="Menu Icon" />
          </button>
          <nav className='hidden sm:flex'>
            <Navigation onNavLinkClick={closeMobileNav} /> {/* Pass closeMobileNav to Navigation */}
          </nav>
        </div>
      </div>
      {/* Use AnimatePresence for exit animations on the mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='block overflow-hidden text-center sm:hidden'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} // Exit animation
            transition={{ duration: 0.3 }} // Shorter transition for smoother feel
            style={{ maxHeight: "100vh" }}
          >
            <nav className='pb-5'>
              <Navigation onNavLinkClick={closeMobileNav} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;