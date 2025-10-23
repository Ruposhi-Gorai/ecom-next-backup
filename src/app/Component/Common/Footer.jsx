"use client"
import React from 'react';
import { PiTShirtLight } from 'react-icons/pi';


// You can replace these with actual icons from a library
const FacebookIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TwitterIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
);

const InstagramIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);


export default function Footer() {
  const footerLinks = {
    shop: [
      { href: '#', label: 'New Arrivals' },
      { href: '#', label: 'Men' },
      { href: '#', label: 'Women' },
      { href: '#', label: 'Sale' },
    ],
    company: [
      { href: '#', label: 'About Us' },
      { href: '#', label: 'Careers' },
      { href: '#', label: 'Press' },
      { href: '#', label: 'Blog' },
    ],
    support: [
      { href: '#', label: 'Contact Us' },
      { href: '#', label: 'FAQ' },
      { href: '#', label: 'Shipping & Returns' },
      { href: '#', label: 'Track Order' },
    ],
  };

  const socialLinks = [
    { href: '#', icon: <FacebookIcon className="h-6 w-6" />, label: 'Facebook' },
    { href: '#', icon: <TwitterIcon className="h-6 w-6" />, label: 'Twitter' },
    { href: '#', icon: <InstagramIcon className="h-6 w-6" />, label: 'Instagram' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Brand and Social Section */}
          <div className="lg:col-span-2 md:col-span-3">
             <a href="#" className="flex items-center space-x-2 mb-4">
               <a href="#" className="flex items-center space-x-2">
                               <PiTShirtLight size={25}/>
                                <span className="font-bold text-xl text-gray-50 italic ">FashioNista</span>
                              </a>
             </a>
            <p className="text-gray-400 max-w-xs mb-4">
              Quality apparel for the modern individual. Style and comfort, delivered.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vogue. All Rights Reserved.</p>
        </div>
        
      </div>
    </footer>
  );
}
