// src/components/sections/HeroCarousel.jsx
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import ảnh từ src/assets/images/
import carouselHats from '../../assets/images/carousel_Hats.png';
import carouselBuiltToLast from '../../assets/images/carousel_BuiltToLast.jpg';
import carouselLoafersMules from '../../assets/images/carousel_LoafersMules.png';
import carouselMerch from '../../assets/images/carousel_Merch.jpg';

// Mảng slides
const slides = [
  {
    link: '/collections/hats-under-100',
    tag: 'SUPREME, ARC\'TERYX + MORE',
    title: 'Hats Under $100',
    brandText: '小東東京卓球',
    desktopImage: carouselHats,
    mobileImage: carouselHats, // dùng chung nếu chưa có mobile riêng
  },
  {
    link: '/collections/built-to-last',
    tag: 'LEMAIRE, AURALEE + MORE',
    title: 'Built to Last',
    brandText: 'LITT',
    desktopImage: carouselBuiltToLast,
    mobileImage: carouselBuiltToLast,
  },
  {
    link: '/collections/loafers-and-mules',
    tag: 'Gucci, The Row + More',
    title: 'Best Of: Loafers and Mules',
    brandText: '',
    desktopImage: carouselLoafersMules,
    mobileImage: carouselLoafersMules,
  },
  {
    link: '/collections/merch',
    tag: 'CHROME HEARTS, SUPREME + MORE',
    title: 'Trending: Apparel',
    brandText: '',
    desktopImage: carouselMerch,
    mobileImage: carouselMerch,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          role="group"
          aria-roledescription="slide"
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a href={slide.link} className="block w-full h-full">
            <section className="relative w-full h-full">
              <picture className="block w-full h-full">
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                <source media="(min-width: 769px)" srcSet={slide.desktopImage} />
                <img
                  src={slide.desktopImage}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>

              {/* Gradient overlay nhẹ hơn - đặt z-index */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 z-20 pointer-events-none" />

              {/* Nội dung text overlay - đặt z-index cao hơn để luôn hiển thị */}
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
                <p className="text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2 md:mb-3 font-medium opacity-90">
                  {slide.tag}
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 md:mb-5 leading-tight">
                  {slide.title}
                </h1>

                {slide.brandText && (
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-6 md:mb-10 opacity-85">
                    {slide.brandText}
                  </p>
                )}

                {/* Nút SHOP NOW - nhỏ gọn hơn */}
                <button className="mt-4 sm:mt-6 bg-white text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  SHOP NOW
                </button>
              </div>
            </section>
          </a>
        </div>
      ))}

      {/* Nút prev/next - nhỏ hơn */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full hover:bg-black/60 transition z-50"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full hover:bg-black/60 transition z-50"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>

      {/* Dots - nhỏ hơn, đẹp hơn */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/90'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;