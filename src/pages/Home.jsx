import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Banner from '../components/Banner'
import Aboutus from '../components/Aboutus';
import Service from '../components/Service';
import News from '../components/News'
import Blog from "../components/Blog";
import Workwithus from "../components/Workwithus";
import { Line, Line2 } from "../components/Line";
import { Header } from '../data'
import ScrollToTop from '../components/ScrollToTop';


const Headersetting = {
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,

};

const Home = () => {

  return (
    <div className='bg-white'>

      <Banner />

      {/* Header Pc */}
      <div className='md:block hidden'>
        <div  className="flex justify-center">
          <div className="Box-1 rounded-sm">
            <div className='flex justify-center mt-8'>
              <h1 className='text-[#374bb0] text-[20px] font-bold'>IT Consultancy</h1>
            </div>
            <div className='flex justify-center mt-1  p-4 mx-3'>
              <p className='text-[15px]'>when creating Briones Bussiness marketing was examined closely. keeping mid the
                question how to provide quality legal service to clients
              </p>
            </div>

          </div>
          <div className="Box-2 rounded-sm">
            <div className='flex justify-center mt-8'>
              <h1 className='text-[#374bb0] text-[20px] font-bold'>Cyber Security</h1>
            </div>
            <div className='flex justify-center mt-1 p-4 mx-3'>
              <p className='text-[15px]'>when creating Briones Bussiness marketing was examined closely. keeping mid the
                question how to provide quality legal service to clients
              </p>
            </div>

          </div>
          <div className="Box-3 rounded-sm">
            <div className='flex justify-center mt-8'>
              <h1 className='text-[#374bb0] text-[20px] font-bold'>IT Consultancy</h1>
            </div>
            <div className='flex justify-center mt-1 p-4 mx-3'>
              <p className='text-[15px]'>when creating Briones Bussiness marketing was examined closely. keeping mid the
                question how to provide quality legal service to clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Header Mobile */}
      <div className='md:hidden block overflow-hidden'>
        <Slider {...Headersetting} className="slick-slideHeader ">
          {Header.map((item) => (
            <div id="about-us" key={item.id} className="flex justify-center ">
              <div className={item.css + " rounded-sm mx-[-55px]"}>
                <div className='flex justify-center mt-8'>
                  <h1 className='text-[#374bb0] text-[20px] mt-6 font-bold'>{item.title}</h1>
                </div>
                <div className='flex justify-center mt-1  p-4 mx-3'>
                  <p className='text-[15px]'>{item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Aboutus />
      <Service />
      <News />
      <Line />
      <Blog />
      <Line2 />
      <Workwithus />
      
      <div className="mt-[170px] mb-[50px] px-[65px] h-[280px] ">
        <div className="flex justify-center">
          <div className='grid md:grid-cols-5 grid-cols-3 gap-5'>
          <div className="bg-gray-400 lg:w-[130px] lg:h-[130px] w-[90px] h-[90px] mr-8  rounded-full" alt='Logo 1' />
          <div className="bg-gray-400 lg:w-[130px] lg:h-[130px] w-[90px] h-[90px] mr-8  rounded-full" alt='Logo 1' />
          <div className="bg-gray-400 lg:w-[130px] lg:h-[130px] w-[90px] h-[90px] mr-8  rounded-full" alt='Logo 1' />
          <div className="bg-gray-400 lg:w-[130px] lg:h-[130px] w-[90px] h-[90px] mr-8  rounded-full" alt='Logo 1' />
          <div className="bg-gray-400 lg:w-[130px] lg:h-[130px] w-[90px] h-[90px] mr-8  rounded-full" alt='Logo 1' />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Home;


