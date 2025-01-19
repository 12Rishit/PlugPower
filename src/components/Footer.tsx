import React from 'react';
import { Plug, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center items-center gap-2 mb-8">
          <Plug className="h-8 w-8 text-green-500" />
          <span className="text-xl font-semibold text-white">Plug & Power</span>
        </div>
        <nav className="mb-8 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-10 mb-8">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="flex justify-center space-x-8 text-gray-400">
          <a href="mailto:contact@plugandpower.com" className="flex items-center gap-2 hover:text-gray-300">
            <Mail className="h-5 w-5" />
            contact@plugandpower.com
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gray-300">
            <Phone className="h-5 w-5" />
            (123) 456-7890
          </a>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-400">
          &copy; {new Date().getFullYear()} Plug & Power. All rights reserved.
        </p>
      </div>
    </footer>
  );
}