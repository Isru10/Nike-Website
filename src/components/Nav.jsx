
// import React from 'react'
// import {headerLogo} from '../assets/images/'
// import {hamburger } from '../assets/icons/'
// import {navLinks} from '../constants/'
// const Nav = () => {
//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href="/">
//            <img src={headerLogo} alt="logo" width={130} height={29}/> 
//           </a>
//           <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>  
//             {navLinks.map((item)=>(
//               <li key={item.label}>
//                 <a href={item.href}
//                 className='font-montserrat leading-normal text-lg text-slate-gray'> 

//                   {item.label}
//                 </a>

//               </li>
//             ))}

//           </ul>
//           <div className="hidden max-lg:block  ">
//             <img src={hamburger} width={25} height={25} alt="ham" />
//           </div>
//       </nav>
//     </header>
//   )
// }

// export default Nav




















// import React from 'react'
// import {headerLogo} from '../assets/images/'
// import {hamburger } from '../assets/icons/'
// import {navLinks} from '../constants/'
// const Nav = () => {
//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href="/">
//            <img src={headerLogo} alt="logo" width={130} height={29}/> 
//           </a>
//           <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>  
//             {navLinks.map((item)=>(
//               <li key={item.label}>
//                 <a href={item.href}
//                 className='font-montserrat leading-normal text-lg text-slate-gray'> 

//                   {item.label}
//                 </a>

//               </li>
//             ))}

//           </ul>
//           <div className="hidden max-lg:block  ">
//             <img src={hamburger} width={25} height={25} alt="ham" />
//           </div>
//       </nav>
//     </header>
//   )
// }

// export default Nav












import React, { useState } from "react";
import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons/";
import { navLinks } from "../constants/";
import { AiOutlineClose } from "react-icons/ai"; // Close icon

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="flex justify-between items-center max-container py-4 px-6">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg text-slate-gray hover:text-black transition duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <img src={hamburger} width={25} height={25} alt="menu icon" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-black text-2xl"
        >
          <AiOutlineClose />
        </button>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg text-black hover:text-gray-700 transition duration-300"
                onClick={toggleMenu} // Close menu when clicking a link
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
