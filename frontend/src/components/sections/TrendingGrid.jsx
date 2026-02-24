// src/components/sections/TrendingGrid.jsx
import React from 'react';

// Import ảnh trending (thay bằng ảnh thật của bạn)
import tshirtBlack from '../../assets/images/trending/tshirt-black.webp';
import shirtBrown from '../../assets/images/trending/shirt-brown.webp';
import jeansBlue from '../../assets/images/trending/jeans-blue.webp';
import jeansGray from '../../assets/images/trending/jeans-gray.webp';
import sneakersColorful from '../../assets/images/trending/sneakers-colorful.webp';
import bootsBlack from '../../assets/images/trending/boots-black.webp';
// Thêm ảnh khác nếu cần

const trendingSections = [
  {
    title: 'Trending: Apparel',
    subTitle: 'CHROME HEARTS, SUPREME, CARHARTT + MORE',
    items: [
      { image: tshirtBlack, name: 'Black Graphic Tee' },
      { image: shirtBrown, name: 'Brown Button-Up Shirt' },
      { image: tshirtBlack, name: 'Black Oversized Tee' }, // lặp lại nếu chưa có ảnh
      { image: shirtBrown, name: 'Brown Work Shirt' },
    ],
  },
  {
    title: 'The Denim Edit',
    subTitle: 'From Grailed',
    items: [
      { image: jeansBlue, name: 'Blue Ripped Jeans' },
      { image: jeansGray, name: 'Gray Straight Jeans' },
      { image: jeansBlue, name: 'Blue Vintage Jeans' },
      { image: jeansGray, name: 'Gray Slim Jeans' },
    ],
  },
  {
    title: 'Trending: Footwear',
    subTitle: 'JORDAN BRAND, NIKE, BALENCIAGA + MORE',
    items: [
      { image: sneakersColorful, name: 'Colorful High-Top Sneakers' },
      { image: bootsBlack, name: 'Black Combat Boots' },
      { image: sneakersColorful, name: 'Custom Sneakers' },
      { image: bootsBlack, name: 'Black Platform Boots' },
    ],
  },
];

const TrendingGrid = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      {/* Container với margin trái phải 200px trên desktop */}
      <div className="max-w-[calc(100%-400px)] mx-auto px-4 sm:px-6 lg:px-8"> {/* 200px trái + 200px phải */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {trendingSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              {/* Tiêu đề section */}
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm md:text-base text-gray-600">
                  {section.subTitle}
                </p>
              </div>

              {/* Grid ảnh sản phẩm */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay "VIEW MORE" khi hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm md:text-base font-medium uppercase tracking-wider">
                        + VIEW MORE
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingGrid;