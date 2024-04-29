import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Banners } from '../data'
import Banner1 from '../assets/banner/banner1.webp'
import { useTranslation } from 'react-i18next';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const Banner = () => {

  const { t } = useTranslation();
  useEffect(() => {
    const img = new Image();
    img.src = Banner1;
  }, []);

  return (
    <div className="relative">
      <img src={Banner1} className="w-full lg:h-[680px] md:h-[500px] h-[550px] object-cover" alt="banner" />
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute inset-0 flex justify-center  mx-10 flex-col">
      
      <Slider {...settings} className='sm:mt-[30px] mt-[50px] custom-slider-banner '>
          {Banners.map((banner, index) => (
            <div key={index} className='2xl:mx-[50px] 3xl:mx-[80px]'>
              <h1 className="text-md  font-Mitr text-white">
                {t(banner.name)}
              </h1>
              <h1 className="text-white font-IBM lg:text-[55px] md:text-[45px] md:mt-0 mt-5 text-[28px] md:w-[550px] lg:mt-2">
                {t(banner.title)} 
                <span className='text-[#fccc5d]'>{t(banner.colortext1)}</span>
              </h1>
              <h1 className="text-white font-IBM lg:text-[55px] md:text-[35px] text-[27px] w-[650px] md:mt-[-15px]">
              {t(banner.colortext2)}
              </h1>
              <p className="text-white font-Mitr lg:text-sm md:text-[12px] text-[12px] md:mt-0 mt-2 md:w-[490px]">
                {t(banner.detail)}
              </p>
              <button className="bg-[#0a1f5b] w-[130px] h-[40px] rounded-3xl md:mt-6 mt-5 text-white 
              font-Mitr">
                {t('ติดต่อเรา')}
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Banner
