// src/components/layout/Header.jsx
import { useState } from 'react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import AuthModal from '../common/AuthModal'; // Import modal bạn vừa tạo

const Header = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' hoặc 'register'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-3xl font-black tracking-tighter text-black">
                GRAILED
              </a>
            </div>

            {/* Search bar - ẩn trên mobile, hiện trung tâm desktop */}
            <div className="hidden md:block flex-1 max-w-3xl mx-6 lg:mx-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-6 h-6" />
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center space-x-4 md:space-x-8">
              {/* SELL - ẩn trên mobile */}
              <button className="hidden md:flex items-center text-base font-medium text-gray-800 hover:text-black transition">
                <ShoppingBag className="w-5 h-5 mr-2" />
                SELL
              </button>

              {/* SIGN UP - ẩn trên mobile */}
              <button
                onClick={() => openAuthModal('register')}
                className="hidden md:block text-base font-medium text-gray-800 hover:text-black transition"
              >
                SIGN UP
              </button>

              {/* LOG IN - nút nổi bật */}
              <button
                onClick={() => openAuthModal('login')}
                className="bg-black text-white px-5 py-2.5 rounded-md text-base font-medium hover:bg-gray-900 transition"
              >
                LOG IN
              </button>

              {/* Mobile: Search + Menu */}
              <div className="flex items-center space-x-4 md:hidden">
                <button className="text-gray-800">
                  <Search className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-800"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal Overlay */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />

      {/* Mobile menu overlay (nếu muốn thêm sau) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-64 bg-white p-6">
            {/* Nội dung menu mobile: SIGN UP, LOG IN, SELL, Search, v.v. */}
            <button onClick={() => setIsMobileMenuOpen(false)} className="mb-6 text-gray-800">
              <X className="w-8 h-8" />
            </button>
            <div className="space-y-6 text-lg font-medium">
              <button onClick={() => { openAuthModal('login'); setIsMobileMenuOpen(false); }}>
                LOG IN
              </button>
              <button onClick={() => { openAuthModal('register'); setIsMobileMenuOpen(false); }}>
                SIGN UP
              </button>
              <button>SELL</button>
              {/* Thêm các link khác nếu cần */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;