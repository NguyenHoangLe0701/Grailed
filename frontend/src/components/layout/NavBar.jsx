// src/components/layout/NavBar.jsx
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // null hoặc 'designers' / 'menswear' / 'womenswear'

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const navItems = [
    { label: 'DESIGNERS', key: 'designers', hasDropdown: true },
    { label: 'MENSWEAR', key: 'menswear', hasDropdown: true },
    { label: 'WOMENSWEAR', key: 'womenswear', hasDropdown: true },
    { label: 'SNEAKERS', href: '/sneakers' },
    { label: 'STAFF PICKS', href: '/staff-picks' },
    { label: 'COLLECTIONS', href: '/collections' },
    { label: 'EDITORIAL', href: '/editorial' },
  ];

  // Dữ liệu mẫu đơn giản (có thể mở rộng sau)
  const designers = [
    'Acne Studios', 'Amiri', 'Arc\'teryx', 'Balenciaga', 'Bape', 'Bottega Veneta',
    'Carhartt', 'Celine', 'Chanel', 'Chrome Hearts', 'Comme des Garçons', 'Dior',
    'Gucci', 'Louis Vuitton', 'Maison Margiela', 'Moncler', 'Nike', 'Prada',
    'Raf Simons', 'Rick Owens', 'Saint Laurent Paris', 'Supreme', 'Vetements',
  ];

  const menswearGroups = [
    { title: 'Tops', items: ['T-Shirts', 'Shirts', 'Sweaters', 'Hoodies'] },
    { title: 'Bottoms', items: ['Jeans', 'Pants', 'Shorts', 'Sweatpants'] },
    { title: 'Outerwear', items: ['Jackets', 'Coats', 'Blazers'] },
    { title: 'Footwear', items: ['Sneakers', 'Boots', 'Sandals'] },
  ];

  const womenswearGroups = [
    { title: 'Tops', items: ['Blouses', 'Crop Tops', 'Sweaters'] },
    { title: 'Dresses', items: ['Mini', 'Midi', 'Maxi'] },
    { title: 'Bottoms', items: ['Jeans', 'Skirts', 'Leggings'] },
    { title: 'Outerwear', items: ['Coats', 'Jackets', 'Blazers'] },
  ];

  const renderDropdownContent = (key) => {
    if (key === 'designers') {
      return (
        <div className="p-6">
          <h3 className="text-lg font-bold mb-4">Shop Popular Designers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
            {designers.map((name) => (
              <a key={name} href="#" className="hover:underline">
                {name}
              </a>
            ))}
          </div>
          <div className="mt-6">
            <a href="/designers" className="text-sm font-bold uppercase hover:underline">
              SEE ALL DESIGNERS →
            </a>
          </div>
        </div>
      );
    }

    const groups = key === 'menswear' ? menswearGroups : womenswearGroups;

    return (
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Shop by Category</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {groups.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold mb-2 uppercase text-sm">{group.title}</h4>
              <ul className="space-y-1 text-sm">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a href="/categories" className="text-sm font-bold uppercase hover:underline">
            SEE ALL CATEGORIES →
          </a>
        </div>
      </div>
    );
  };

  return (
  <nav className="bg-white border-b border-gray-200 relative mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="flex flex-wrap justify-center items-center w-full gap-x-12 py-6 text-sm font-bold uppercase tracking-wide">
        {navItems.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                className="px-2 py-2 hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <button
                onClick={() => toggleDropdown(item.key)}
                className="flex items-center px-2 py-2 hover:text-black transition-colors"
              >
                {item.label}
                {openDropdown === item.key ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>

    {/* MEGA DROPDOWN */}
    {openDropdown && (
      <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {renderDropdownContent(openDropdown)}
        </div>
      </div>
    )}
  </nav>
);
};

export default NavBar;