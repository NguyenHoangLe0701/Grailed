// src/components/layout/Footer.jsx
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { label: 'ABOUT', href: '#' },
    { label: 'YOUR PRIVACY CHOICES', href: '#' },
    { label: 'HELP & FAQ', href: '#' },
    { label: 'TERMS', href: '#' },
    { label: 'PRIVACY', href: '#' },
    { label: 'TRUST', href: '#' },
    { label: 'ACCESSIBILITY', href: '#' },
    { label: 'CONTACT', href: '#' },
    { label: 'JOBS', href: '#' },
    { label: 'IOS APP', href: '#' },
  ];

  return (
    <footer className="bg-black text-white mt-auto">
      {/* Full-width, không max-w-7xl */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 border-t border-gray-800">
        {/* Dòng links trên cùng (nếu có, giống ảnh bạn gửi) */}
        <div className="text-center text-xs uppercase tracking-wider text-gray-400 mb-6">
          YOUR PRIVACY CHOICES • HELP & FAQ • TERMS • PRIVACY • TRUST • ACCESSIBILITY • CONTACT • JOBS • IOS APP
        </div>

        {/* Links chính: responsive wrap tự nhiên */}
        <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-3 text-xs sm:text-sm uppercase tracking-wide">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:underline hover:text-gray-300 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs sm:text-sm text-gray-500">
          Grailed © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;