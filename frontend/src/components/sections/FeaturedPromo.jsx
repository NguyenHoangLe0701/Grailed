// src/components/sections/FeaturedPromo.jsx
import React from 'react';

// Ảnh promo và thumbnails
import promoBag from '../../assets/images/trending/promo_bag_celine.jpg'; // ảnh túi xách lớn
import tshirt from '../../assets/images/trending/tshirt-black.webp';
import shirtBrown from '../../assets/images/trending/shirt-brown.webp';
import sneakers from '../../assets/images/trending/sneakers-colorful.webp';
import jeansBlue from '../../assets/images/trending/jeans-blue.webp';

const FeaturedPromo = () => {
  return (
    <div className="py-12 md:py-16 bg-white"> 
      <div className="max-w-[calc(100%-400px)] mx-auto px-4 sm:px-6 lg:px-8"> {/* 200px left + 200px right */}
        <section className="w-full flex flex-col md:flex-row items-stretch gap-8">
      {/* Left: Trending list + grid */}
      <div className="md:w-1/3 flex-shrink-0">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
          CHROME HEARTS, SUPREME, PRADA +MORE
        </p>

        <h3 className="text-2xl md:text-3xl font-bold mb-4">Trending: Accessories</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-100">
            <img src={tshirt} alt="item 1" className="w-full h-full object-cover" />
          </div>

          <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-100">
            <img src={shirtBrown} alt="item 2" className="w-full h-full object-cover" />
          </div>

          <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-100">
            <img src={sneakers} alt="item 3" className="w-full h-full object-cover" />
          </div>

          {/* last thumbnail with overlay CTA */}
          <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-100">
            <img src={jeansBlue} alt="item 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm font-bold uppercase">
              + View More
            </div>
          </div>
        </div>
      </div>

      {/* Right: large promo image with card */}
      <div className="md:w-2/3 relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-gray-50 rounded-sm">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${promoBag})` }}
        />

        {/* Gradient overlay to subtly darken edges (softened) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Promo card placed bottom-left */}
        <div className="absolute left-6 bottom-8 w-72 md:w-[420px] bg-white rounded-2xl p-5 shadow-lg">
          <p className="text-xs uppercase tracking-wider text-gray-500">Trending Now</p>
          <h2 className="text-xl md:text-2xl font-bold text-black mt-2">Get In Your Bag</h2>
          <p className="text-sm text-gray-700 mt-2">Shop our favorite bags from Louis Vuitton, Celine, RRL and more.</p>

          <a
            href="/collections/bags"
            className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default FeaturedPromo;