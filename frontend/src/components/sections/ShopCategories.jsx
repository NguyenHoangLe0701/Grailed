// src/components/sections/ShopCategories.jsx
import React from 'react';

// Images - thay bằng ảnh thật của bạn
import tshirtBlue from '../../assets/images/trending/tshirt-black.webp';
import jeansBlue from '../../assets/images/trending/jeans-blue.webp';
import shirtBrown from '../../assets/images/trending/shirt-brown.webp';
import sneakersColorful from '../../assets/images/trending/sneakers-colorful.webp';
import jeansGray from '../../assets/images/trending/jeans-gray.webp';
import bootsBlack from '../../assets/images/trending/boots-black.webp';

const menswearItems = [
  { image: tshirtBlue, name: 'Designer Tees' },
  { image: jeansBlue, name: 'Premium Denim' },
  { image: shirtBrown, name: 'Luxury Shirts' },
  { image: sneakersColorful, name: 'Designer Sneakers' },
  { image: jeansGray, name: 'Tailored Blazers' },
  { image: bootsBlack, name: 'Boots & Shoes' },
];

const womenswearItems = [
  { image: shirtBrown, name: 'Designer Tops' },
  { image: jeansBlue, name: 'Skirts' },
  { image: bootsBlack, name: 'Jackets' },
  { image: tshirtBlue, name: 'Boots' },
  { image: sneakersColorful, name: 'Handbags' },
  { image: jeansGray, name: 'Sunglasses' },
];

const ShopCategories = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-[calc(100%-400px)] mx-auto px-4 sm:px-6 lg:px-8"> {/* 200px left + 200px right */}
        {/* Shop Menswear Section */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop Menswear</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {menswearItems.map((item, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-sm bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium uppercase tracking-wider text-center px-2">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shop Womenswear Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop Womenswear</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {womenswearItems.map((item, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-sm bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium uppercase tracking-wider text-center px-2">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
