// src/components/sections/EditorialPromo.jsx
import React from 'react';

// Images - thay bằng ảnh thật của bạn
import editorialImage from '../../assets/images/trending/promo_bag_celine.jpg'; // placeholder
import leatherBelt from '../../assets/images/trending/boots-black.webp';
import leatherBoots from '../../assets/images/trending/jeans-blue.webp';
import leatherBag from '../../assets/images/trending/shirt-brown.webp';
import leatherAccessories from '../../assets/images/trending/sneakers-colorful.webp';

const EditorialPromo = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-[calc(100%-400px)] mx-auto px-4 sm:px-6 lg:px-8"> {/* 200px left + 200px right */}
        <section className="w-full flex flex-col md:flex-row items-stretch gap-8">
          {/* Left: Large editorial image + card */}
          <div className="md:w-2/3 relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-gray-50 rounded-sm">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${editorialImage})` }}
            />

            {/* Gradient overlay (softened) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

            {/* Editorial card placed bottom-left */}
            <div className="absolute left-6 bottom-8 w-72 md:w-[420px] bg-white rounded-2xl p-5 shadow-lg">
              <p className="text-xs uppercase tracking-wider text-gray-400">Editorial</p>
              <h2 className="text-xl md:text-2xl font-bold text-black mt-2">In Conversation: Nick Wooster</h2>
              <p className="text-sm text-gray-700 mt-2">Industry veteran Nick Wooster opens up on the state of retail, the importance of physical connections and why he's optimistic for the future of fashion.</p>

              <a
                href="/editorial"
                className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
              >
                READ MORE
              </a>
            </div>
          </div>

          {/* Right: Grid thumbnails + Leatherwork Mastery */}
          <div className="md:w-1/3 flex-shrink-0">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
              CAROL CHRISTIAN POELL, M+, GUIDI +MORE
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">Leatherwork Mastery</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-100">
                <img src={leatherBelt} alt="Leather Belt" className="w-full h-full object-cover" />
              </div>

              <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-100">
                <img src={leatherBoots} alt="Leather Boots" className="w-full h-full object-cover" />
              </div>

              <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-100">
                <img src={leatherBag} alt="Leather Bag" className="w-full h-full object-cover" />
              </div>

              {/* Last thumbnail with overlay CTA */}
              <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-100">
                <img src={leatherAccessories} alt="Leather Accessories" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm font-bold uppercase">
                  + VIEW MORE
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditorialPromo;
