import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, useAnimation } from "framer-motion";

import Banner from '../components/Banner'
import { Blogs, Work, Services, Header } from '../data'

import J3k from '../assets/j3k.jpg'
import Service from '../assets/service.jpg'
import Logo1 from '../assets/logo/logo1.svg.png'
import Logo2 from '../assets/logo/logo2.svg.png'
import Logo3 from '../assets/logo/logo3.png'
import Service1 from '../assets/service/service1.jpg'
import Service2 from '../assets/service/service2.jpg'
import Service3 from '../assets/service/service3.jpg'
import Service4 from '../assets/service/service4.jpg'

import New1 from '../assets/news/new1.jpg'
import New2 from '../assets/news/new2.jpg'
import New3 from '../assets/news/new3.jpg'
import New4 from '../assets/news/new4.jpg'
import New5 from '../assets/news/new5.jpg'
import New6 from '../assets/news/new6.jpg'

import Mobile1 from '../assets/mobile/mobile1.jpg'
import Mobile2 from '../assets/mobile/mobile2.jpg'
import Mobile3 from '../assets/mobile/mobile3.jpg'
import Mobile4 from '../assets/mobile/mobile4.jpg'
import Mobile5 from '../assets/mobile/mobile5.jpg'
import Mobile6 from '../assets/mobile/mobile6.jpg'


const Headersetting = {
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,

};

const Servicesetting = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Blogsetting = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const Worksetting = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const Home = () => {

  const controls = useAnimation();

  return (
    <div>
      <Banner />

      {/* Header Pc */}
      <div className='md:block hidden'>
        <div id="about-us" className="flex justify-center">
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
      <div className='md:hidden block'>
        <Slider {...Headersetting} className="slick-slideHeader ">
          {Header.map((item) => (
            <div id="about-us" className="flex justify-center ">
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

      {/* AboutUs */}
      <div>
        <motion.div animate={controls}>
          <div className="flex justify-center md:mt-28 mt-[-210px] md:px-5">
            <div className="grid md:grid-cols-2">
              <div className="md:mx-5">
                <img src={J3k} className="md:w-[650px] w-full lg:h-[380px] md:h-[300px] md:rounded-xl object-cover" />
              </div>

              <div className="mx-5 md:mt-0 mt-6">
                <div className="flex items-center">
                  <div className="bg-blue-400 w-[60px] h-[1.5px]" />
                  <h1 className="ml-4 text-blue-300 font-Mitr">เกี่ยวกับเรา</h1>
                </div>
                <div className='xl:mt-4 md:mt-2 mt-4'>
                  <h1 className="lg:text-[40px] text-[35px] whitespace-normal font-IBM">บริษัท
                    <span className='text-[#374bb0] mr-2 ml-2 whitespace-normal'>
                      ต้องหาเงินได้ไม่
                    </span>
                    จำกัด
                  </h1>
                  <h1 className="lg:text-[35px] md:text-[25px] text-[30px] text-[#fccc5d] font-Mitr">เป้าหมายของเรา</h1>
                  <p className='lg:mt-2 mt-4 lg:text-[17px] md:text-[14px] font-Mitr'>"เป้าหมายของเราคือการทำเจนอยางยงยนและสาคญ โดยใหความสาคญในการ พัฒนาและตลาดสินค้าที่มีคุณภาพ
                    และการให้บริการที่ดีเพื่อตอบสนองความต้องเราให้สามารถพัฒนาและเติบโตตามความสามารถของเขาและสร้างราย
                    ได้ที่มั่นคงสาหรบพวกเขาเองและองคกรทเราดาเมนการอย"</p>
                </div>

                <div className="lg:mt-6 md:mt-4 mt-6">
                  <button className="bg-[#0a1f5b] w-[130px] h-[40px] rounded-full text-white
              text-[15px] font-Mitr">
                    เป้าหมายของเรา
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Main */}
      <div id="services" className="relative w-full h-[450px] mt-20">
        <img src={Service} className="absolute inset-0 w-full h-[450px] object-cover" alt="banner" />

        <div className="absolute  flex flex-col items-center justify-center
         bg-[#0a1f5b] bg-opacity-80 w-full h-full">
          <h1 className="text-[40px] text-white mt-[-240px] font-IBM ">บริการของเรา</h1>
        </div>
        <div className="relative z-10 flex justify-center items-center">
          <p className="text-white md:text-[17px] text-[14px] mt-[150px] text-center font-Mitr">
            บริการให้คำปรึกษา บริการ Domain, Cloud Flare, Cloud Hosting <br />
            รับกำจัด Malware และอื่น ๆ สำหรับ Wordpress
          </p>
        </div>

      </div>

      {/* Service Pc */}
      <div className="hidden md:block relative z-10 mt-[-190px] mx-16">
        <div className="grid grid-cols-4 gap-6">
          <div className="relative">
            <img src={Service1} className="w-[300px] h-[370px] rounded-xl object-cover" alt="Service Image" />
            <div className="absolute inset-x-0 bottom-0  h-[95px] flex items-center
             justify-center  rounded-b-xl"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))' }} >
              <h1 className="text-white lg:text-[20px]  md:text-[16px] font-Mitr">บริการให้คำปรึกษา</h1>
            </div>
          </div>
          <div className="relative">
            <img src={Service2} className="w-[300px] h-[370px] rounded-xl object-cover" alt="Service Image" />
            <div className="absolute inset-x-0 bottom-0 h-[95px] flex items-center
             justify-center rounded-b-xl"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))' }}>
              <h1 className="text-white lg:text-[20px]  md:text-[16px] font-Mitr">บริการย้ายเว็บไซต์</h1>
            </div>
          </div>
          <div className="relative">
            <img src={Service3} className="w-[300px] h-[370px] rounded-xl object-cover" alt="Service Image" />
            <div className="absolute inset-x-0 bottom-0 h-[95px] flex items-center
             justify-center rounded-b-xl"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))' }}>
              <h1 className="text-white lg:text-[18px]  md:text-[16px] mx-4 mt-2 font-Mitr">บริการอุดช่องโหว่ของมัลแวร์</h1>
            </div>
          </div>
          <div className="relative">
            <img src={Service4} className="w-[300px] h-[370px] rounded-xl object-cover" alt="Service Image" />
            <div className="absolute inset-x-0 bottom-0  h-[95px] flex items-center
             justify-center rounded-b-xl"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))' }}>
              <h1 className="text-white lg:text-[20px] md:text-[16px] font-Mitr">บริการเช่าเส้น api</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Service Mobile */}
      <div className='sm:hidden block mt-[-210px] relative'>
        <Slider {...Servicesetting} className="custom-slider-service">
          {Services.map((item) => (
            <div className='flex slick-slideService justify-center relative'>
              <img src={Service1} className='w-[320px] h-[400px] rounded-xl object-cover' />
              <div className="absolute bottom-0 w-[320px]  h-[250px] flex items-center
             justify-center rounded-b-xl"
                style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.02))' }}>
                <div className='mx-5 mt-10'>
                  <h1 className="text-white font-Mitr text-[20px] text-center">
                    {item.title}
                    <p className='mt-4 text-[14px] mx-4'>
                      {item.detail}
                    </p>
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Logo */}
      <div className="flex justify-center md:mt-20 mt-[-250px]">
        <div className="grid grid-cols-3 lg:gap-28 md:gap-16 gap-5">
          <div>
            <img src={Logo1} className="md:w-[150px] md:h-[150px] md:ml-0 ml-[20px] w-[100px] h-[100px] " />
          </div>
          <div>
            <img src={Logo2} className="md:w-[180px] md:h-[150px] w-[130px] h-[100px]" />
          </div>
          <div>
            <img src={Logo3} className="md:w-[150px] md:h-[150px] w-[115px] h-[115px] md:mt-[-10px] mt-[-20px]" />
          </div>

        </div>
      </div>

      {/* News */}
      <div className="md:px-[65px] px-2">
        <div className="w-full h-[0.1px] bg-gray-600 mt-20" />
        <div className="flex mt-10">
          <div className="md:w-[50px] w-[80px] h-[0.1px] bg-gray-600">
            <p className="mt-[-12px] md:ml-16 ml-24 text-blue-400">Blog</p>
          </div>
        </div>

        {/* News Pc */}
        <div className='hidden md:block'>
        <div className="mt-10 flex justify-center lg:mx-5">
          <div className="flex justify-between">
            <div className="grid grid-cols-2">
              <div>
                <h1 className="lg:text-[40px] md:text-[35px] font-IBM">ข่าวสาร</h1>
                <p className="font-Mitr text-blue-800 whitespace-nowrap">อัพเดทข่าวสารของบริษัท</p>

                <div className="grid grid-cols-2 gap-52">
                  <div className="mt-9 lg:w-[500px] md:w-[500px]">
                    <img src={New1} className="lg:w-[190px] lg:h-[120px] md:w-[160px] md:h-[115px] rounded-xl object-cover" />
                    <img src={New2} className="lg:w-[190px] lg:h-[120px] md:w-[160px] md:h-[115px] mt-4 rounded-xl object-cover" />
                    <img src={New3} className="lg:w-[190px] lg:h-[120px] md:w-[160px] md:h-[115px] mt-5 rounded-xl object-cover" />
                  </div>

                  <div className="mt-12 lg:w-[350px] mr-[40px]">

                    <h1 className="lg:mx-[-10px] lg:w-[200px] md:w-[140px] md:mx-[-40px] lg:text-[16px] md:text-[14px] font-IBM">
                      ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์
                      <p className="lg:mt-2 md:mt-2 text-[12px] text-gray-400 font-Mitr">
                        Admin | 08 jan 2024
                      </p>
                    </h1>

                    <div className='lg:mt-11 mt-12'>
                      <h1 className="lg:mx-[-10px] lg:w-[200px] md:w-[140px] md:mx-[-40px] lg:text-[16px] md:text-[14px] font-IBM">
                        ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์
                        <p className="lg:mt-2 md:mt-2 text-[12px] text-gray-400 font-Mitr">
                          Admin | 08 jan 2024
                        </p>
                      </h1>
                    </div>

                    <div className='lg:mt-12 md:mt-12'>
                      <h1 className="lg:mx-[-10px] lg:w-[200px] md:w-[140px] md:mx-[-40px] lg:text-[16px] md:text-[14px] font-IBM">
                        ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์
                        <p className="lg:mt-2 md:mt-2 text-[12px] text-gray-400 font-Mitr">
                          Admin | 08 jan 2024
                        </p>
                      </h1>
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex lg:mx-14 md:mx-6">
                <button className="bg-[#0a1f5b] text-white font-Mitr lg:w-[130px] md:w-[100px] h-[40px]
                lg:text-[15px] md:text-[13px] rounded-3xl">
                  ข่าวสารทั้งหมด
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="w-[0.1px] lg:h-[540px] md:h-[520px] bg-black" />
            </div>


            <div className="grid grid-cols-2 gap-52 mx-12">
              <div>
                <h1 className="lg:text-[40px] md:text-[30px] font-IBM whitespace-nowrap">
                  คู่มือการใช้งาน
                </h1>
                <p className="text-blue-800 mt-2 whitespace-nowrap font-Mitr">คู่มือการใช้งานกับทางบริษัท</p>

                <div className="grid grid-cols-2 gap-12">
                  <div className="mt-9 lg:w-[300px] md:w-[280px]">
                    <img src={New4} className="lg:w-[190px] lg:h-[120px] md:w-[160px] md:h-[115px] rounded-xl object-cover" />
                    <img src={New5} className="lg:w-[190px] lg:h-[120px] md:w-[160px] md:h-[115px] mt-4 rounded-xl object-cover" />
                    <img src={New6} className="lg:w-[190px] lg:h-[120px] md:w-[160px] md:h-[115px] mt-5 rounded-xl object-cover" />
                  </div>

                  <div className="mt-[50px] lg:w-[400px]">
                    <h1 className="lg:mx-[150px] lg:w-[200px] md:mx-[125px] md:w-[150px] lg:text-[16px] md:text-[14px] font-IBM">
                      ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์
                    </h1>
                    <p className="lg:mx-[150px] md:mx-[125px] mt-2 text-[12px] md:text-[12px] md:w-[200px] text-gray-400 font-Mitr">
                      Admin | 08 jan 2024
                    </p>

                    <div className='mt-12'>
                      <h1 className="lg:mx-[150px] lg:w-[200px] md:mx-[125px] md:w-[150px] lg:text-[16px] md:text-[14px] font-IBM">
                        ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์
                      </h1>
                      <p className="lg:mx-[150px] md:mx-[125px] mt-2 text-[12px] md:text-[12px] md:w-[200px] text-gray-400 font-Mitr">
                        Admin | 08 jan 2024
                      </p>
                    </div>

                    <div className='mt-12'>
                      <h1 className="lg:mx-[150px] lg:w-[200px] md:mx-[125px] md:w-[150px] lg:text-[16px] md:text-[14px] font-IBM">
                        ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์
                      </h1>
                      <p className="lg:mx-[150px] md:mx-[125px] mt-2 text-[12px] md:text-[12px] md:w-[200px] text-gray-400 font-Mitr">
                        Admin | 08 jan 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:mx-9'>
                <button className="bg-[#0a1f5b] text-white font-Mitr lg:w-[130px] md:w-[100px] h-[42px]
                lg:text-[15px] md:text-[13px] rounded-3xl">
                  ข่าวสารทั้งหมด
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* News Mobile */}
        <div className='sm:hidden block'>
          <div className='mt-5'>
            <h1 className='text-[40px] font-IBM'>ข่าวสาร</h1>
            <p className='mt-[-5px] text-blue-800 font-Mitr'>อัพเดทข่าวสารของบริษัท</p>
            <button className='bg-[#0a1f5b] w-[140px] h-[40px] text-white text-[16px] 
            rounded-3xl mt-4 font-Mitr mx-2'>
              ข่าวสารทั้งหมด
            </button>
          </div>

          {/* Card 1 */}
          <div className='mt-10 flex'>
            <img src={Mobile1} className='w-[150px] h-[95px] object-cover' alt="news" />
            <h1 className='mt-3 mx-5 text-[15px] font-IBM'>
              ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์ <br />
              <p className='text-[12px] text-gray-400 mt-2 font-Mitr'>
                Admin | 08 jan 2024
              </p>
            </h1>
          </div>
          <div className='w-full h-[0.1px] bg-gray-400' />

          {/* Card 2 */}
          <div className='mt-1 flex'>
            <img src={Mobile2} className='w-[150px] h-[95px] object-cover' alt="news" />
            <h1 className='mt-3 mx-5 text-[15px] font-IBM'>
              ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์ <br />
              <p className='text-[12px] text-gray-400 mt-2 font-Mitr'>
                Admin | 08 jan 2024
              </p>
            </h1>
          </div>
          <div className='w-full h-[0.1px] bg-gray-400' />

          {/* Card 3 */}
          <div className='mt-1 flex'>
            <img src={Mobile3} className='w-[150px] h-[95px] object-cover' alt="news" />
            <h1 className='mt-3 mx-5 text-[15px] font-IBM'>
              ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์ <br />
              <p className='text-[12px] text-gray-400 mt-2 font-Mitr'>
                Admin | 08 jan 2024
              </p>
            </h1>
          </div>
          <div className='w-full h-[0.1px] bg-gray-400' />
        </div>
      </div>

      <div className='sm:hidden block px-2'>
        <div className='mt-12 mx-4'>
          <div className='flex justify-end'>
            <h1 className='text-[40px] font-IBM'>คู่มือการใช้งาน</h1>
          </div>
          <div className='flex justify-end'>
            <p className='mt-[-5px] text-blue-800 font-Mitr'>คู่มือการใช้งานกับทางบริษัท</p>
          </div>
          <div className='flex justify-end'>
            <button className='bg-[#0a1f5b] w-[140px] h-[40px] text-white text-[16px] 
              rounded-3xl mt-4 font-Mitr mx-2'>
              คู่มือการใช้งาน
            </button>
          </div>
        </div>

        {/* Card 1 */}
        <div className='mt-10 flex'>
          <img src={Mobile4} className='w-[150px] h-[95px] object-cover' alt="news" />
          <h1 className='mt-3 mx-5 text-[15px] font-IBM'>
            ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์ <br />
            <p className='text-[12px] text-gray-400 mt-2 font-Mitr'>
              Admin | 08 jan 2024
            </p>
          </h1>
        </div>
        <div className='w-full h-[0.1px] bg-gray-400' />

        {/* Card 2 */}
        <div className='mt-1 flex'>
          <img src={Mobile5} className='w-[150px] h-[95px] object-cover' alt="news" />
          <h1 className='mt-3 mx-5 text-[15px] font-IBM'>
            ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์ <br />
            <p className='text-[12px] text-gray-400 mt-2 font-Mitr'>
              Admin | 08 jan 2024
            </p>
          </h1>
        </div>
        <div className='w-full h-[0.1px] bg-gray-400' />

        {/* Card 3 */}
        <div className='mt-1 flex'>
          <img src={Mobile6} className='w-[150px] h-[95px] object-cover' alt="news" />
          <h1 className='mt-3 mx-5 text-[15px] font-IBM'>
            ฝึกอบรมปฏิบัติการควบคุมเว็บไซต์จำนวนมากด้วยระบบคลาวด์ <br />
            <p className='text-[12px] text-gray-400 mt-2 font-Mitr'>
              Admin | 08 jan 2024
            </p>
          </h1>
        </div>
        <div className='w-full h-[0.1px] bg-gray-400' />
      </div>


      <div id="blog" className="hidden md:block mx-20 py-20">
        <div className="w-full h-[0.1px] bg-black" />
      </div>


      {/* Blog */}
      <div className="md:mt-[-20px] mt-14 md:px-[65px] px-4">
        <div className="md:flex md:justify-between">
          <h1 className="lg:text-[45px] text-[40px] font-IBM">บทความ
            <div className="lg:mt-[-75px] lg:mx-[190px] md:mt-[-5px] mt-[-25px]">
              <span className="text-[16px] text-[#374bb0] font-Mitr md:mt-0">
                บทความสาระน่ารู้ ที่เป็นประโยชน์
              </span>
            </div>
          </h1>
          <button className="bg-[#0a1f5b] lg:w-[150px] md:w-[130px] w-[150px] h-[45px] rounded-3xl text-white
          ml-auto md:mt-0 mt-2 lg:text-[15px] md:text-[14px] font-Mitr">
            บทความทั้งหมด
          </button>
        </div>

        <div className="lg:mt-16 md:mt-14 mt-[40px] md:mx-0 mx-12">
          <Slider {...Blogsetting} className="custom-slider-blog ">
            {Blogs.map((item) => (
              <div key={item.id} className="slick-slideBlog">
                <img src={item.image} className="md:w-[280px] md:h-[160px] w-[300px] h-[180px] rounded-xl object-cover" />
                <div className="md:px-3 px-4 py-2">
                  <h1 className='text-[15px] font-bold md:w-full w-[300px]'>{item.title}</h1>
                  <p className='text-[12px] text-gray-400 mt-2'>{item.date}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="md:mt-[-90px] md:px-[65px] px-3 mt-[-160px]">
        <div className="w-full h-[0.1px] bg-gray-600 " />
      </div>

      {/* Work with Us */}
      <div className="lg:mt-[60px] md:mt-[30px] mt-12 px-[65px]">
        <div className="md:flex md:justify-between md:text-left text-center">
          <h1 className="lg:text-[40px] md:text-[30px] text-[40px] font-IBM">ร่วมงานกับเรา
            <div className="lg:mt-[-70px] md:mt-[-10px] mt-[-25px] lg:mx-[260px] md:mx-2 ">
              <span className="text-[16px] whitespace-normal font-Mitr
              text-[#374bb0]">มาร่วมเป็นส่วนนึงกับบริษัทเรา</span>
            </div>
          </h1>
          <button className="bg-[#0a1f5b] lg:w-[150px] md:w-[130px] w-[150px] h-[45px] rounded-3xl text-white
          ml-auto  lg:text-[15px] md:text-[14px] font-Mitr">
            ตำแหน่งทั้งหมด
          </button>
        </div>

        <div className="mt-10 ">
          <Slider {...Worksetting} className="custom-slider">
            {Work.map((item) => (
              <div className="slick-slidework bg-white border border-gray-400 border-opacity-70 shadow-sm 
          lg:w-[380px] lg:h-[120px] md:w-[15px] md:h-[110px]    rounded-xl">
                <div className="flex justify-between p-4 mx-1">
                  <h1 className="text-[17px] font-bold ">{item.title}</h1>

                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-700 w-[80px] h-[30px] rounded-2xl text-white text-[14px] mr-[-10px]">
                      สมัคร
                    </button>
                  </a>
                </div>

                <div className="px-3 mt-[-10px] ">
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* empty icons */}
      <div className="hidden md:block mt-[80px] px-[65px]">
        <div className="grid grid-cols-5  lg:mx-[80px] lg:gap-0 gap-10">
          <div className="bg-gray-400 w-[130px] h-[130px] rounded-full" />

          <div className="bg-gray-400 w-[130px] h-[130px] rounded-full" />

          <div className="bg-gray-400 w-[130px] h-[130px] rounded-full" />

          <div className="bg-gray-400 w-[130px] h-[130px] rounded-full" />

          <div className="bg-gray-400 w-[130px] h-[130px] rounded-full" />
        </div>
      </div>

      {/* empty icons mobile */}
      <div className="sm:hidden block mt-[50px] px-[30px] mb-20">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-blue-200 w-[100px] h-[100px] rounded-full" />

          <div className="bg-blue-200 w-[100px] h-[100px] rounded-full" />

          <div className="bg-blue-200 w-[100px] h-[100px] rounded-full" />

        </div>
      </div>

    </div>
  )
}

export default Home


