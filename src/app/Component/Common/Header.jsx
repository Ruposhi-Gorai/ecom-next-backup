"use client"
import React, { useState, useEffect } from 'react';
import { PiTShirtLight } from "react-icons/pi";


// You can replace these with actual icons from a library like lucide-react
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const ShoppingCartIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
);

const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset the overflow style when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Shop' },
    { href: '#', label: 'New Arrivals' },
    { href: '#', label: 'About' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
               <a href="#" className="flex items-center space-x-2">
                <PiTShirtLight size={25}/>
                 <span className="font-bold text-xl text-gray-800 italic ">FashioNista</span>
               </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:justify-center md:flex-1">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center justify-end space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <UserIcon className="h-6 w-6" />
                <span className="sr-only">Login</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="sr-only">Cart</span>
              </a>
               {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu (Overlay) */}
      <div 
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
        <div className="relative z-50 flex flex-col w-64 h-full bg-white ml-auto p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end mb-8 p-2 text-gray-600 hover:text-gray-900"
            >
              <XIcon className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </button>
            <nav>
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="block text-lg font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
        </div>
      </div>
    </>
  );
}
