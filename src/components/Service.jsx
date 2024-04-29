import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionWrapper from './SectionWrapper'
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion'
import { readNews } from '../store/api';
import Service0 from '../assets/service.webp'
import { useTranslation } from 'react-i18next';
import Logo1 from '../assets/logo/logo1.webp'
import Logo2 from '../assets/logo/logo2.webp'
import Logo3 from '../assets/logo/logo3.webp'


const Servicesetting = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};

const skeletonData = Array.from({ length: 4 }).map((_, skeleton) => ({
    id: skeleton,
}));

const Service = () => {

    const { t } = useTranslation();
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await readNews();
                setData(response.data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1200);
    }, []);

        // 2 language Section
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await readLag();
                    setData(response.data);
                } catch (error) {
                    console.error('Error fetching blog data:', error);
                }
            };
            fetchData();
        }, []);
    
        // วิธีใช้ให้นำไปใส่ {renderText()} (คือข้อความที่ได้จาก api)
        const renderText = () => {
            if (lang === 'en') {
                return data.enText;
            } else {
                return data.thText;
            }
        };

    return (
        <div>
            <div id="services" className="relative w-full xl:h-[550px] h-[450px] mt-20">
                <img src={Service0} className="absolute inset-0 w-full h-[450px] object-cover" alt="Service main" />

                <div className="absolute flex flex-col items-center justify-center
                bg-[#0a1f5b] bg-opacity-80 w-full h-full">
                    <motion.h1
                        variants={fadeIn(0.5)}
                        className="xl:text-[50px] text-[40px] text-white xl:mt-[-300px] mt-[-240px] font-IBM"
                    >
                        {t('บริการของเรา')}
                    </motion.h1>
                </div>
                <div className="relative z-10 flex justify-center items-center">
                    <motion.p
                        variants={fadeIn(0.5)}
                        className="text-white xl:text-[22px] md:text-[17px] text-[14px] xl:mt-[190px] mt-[150px] text-center font-Mitr">
                        {t('บริการให้คำปรึกษา บริการ Domain, Cloud Flare, Cloud Hosting')} <br />
                        {t('รับกำจัด Malware และอื่น ๆ สำหรับ Wordpress')}

                    </motion.p>
                </div>
            </div>

            <div className="hidden sm:block relative z-10 xl:mt-[-250px] mt-[-190px] mx-14">
                <div className="grid grid-cols-4 3xl:mx-32 gap-5">
                    {isLoading ? skeletonData.map((skeleton) => (
                        <div key={skeleton.id} className="relative overflow-hidden">
                            <div className="bg-gray-600 opacity-65 2xl:w-[300px] xl:w-[280px] lg:w-[230px] md:w-[180px] xl:h-[450px] lg:h-[350px] h-[250px] 
                                rounded-xl object-cover" alt="Service Image" />
                            <div className="absolute inset-x-0 bottom-0 2xl:w-[300px] xl:w-[280px] lg:w-[230px] md:w-[180px] 
                                lg:h-[180px] h-[100px] flex items-center justify-center rounded-b-xl"
                                style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))' }}
                            >
                            </div>
                        </div>

                    ))
                        : data.slice(0, 4).map((item, index) => (
                            <div key={index} className="relative overflow-hidden">
                                <img
                                    src={item.featured_media_src_url}
                                    alt={item.title.rendered}
                                    className="2xl:w-[300px] xl:w-[280px] lg:w-[230px] md:w-[180px] xl:h-[450px]
                                     lg:h-[350px] h-[250px] rounded-xl object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 2xl:w-[300px] xl:w-[280px] lg:w-[230px] md:w-[180px] 
                                    lg:h-[180px] h-[100px] flex items-center justify-center  rounded-b-xl"
                                    style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))' }}
                                >
                                    <h2 className="text-white xl:text-[28px] mt-10 lg:text-[20px] text-[12px]
                                        mr-4 font-Mitr">
                                        {item.title.rendered}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Service Mobile */}
            <motion.div
                variants={fadeIn(0.5)}
                className='sm:hidden block mt-[-210px] relative'>
                <Slider {...Servicesetting} className="custom-slider-service">
                    {isLoading ? skeletonData.map((skeleton) => (
                        <div key={skeleton.id} className='flex slick-slideService justify-center relative'>
                            <div className='bg-gray-600 opacity-60 w-[320px] h-[400px] rounded-xl object-cover' />
                            <div className="absolute bottom-0 w-[320px]  h-[250px] flex items-center
                                justify-center rounded-b-xl"
                                style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.02))' }}
                            >
                            </div>
                        </div>
                    ))
                        : data.map((item, index) => (
                            <div key={index} className='flex slick-slideService justify-center relative'>
                                <img
                                    src={item.featured_media_src_url}
                                    alt={item.title.rendered}
                                    className='w-[320px] h-[400px] rounded-xl object-cover'
                                />
                                <div className="absolute bottom-0 w-[320px]  h-[250px] flex items-center
                                    justify-center rounded-b-xl"
                                    style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.02))' }}
                                >
                                    <div className='mx-5 mt-10'>
                                        <h1 className="text-white font-Mitr text-[20px] text-center">
                                            {item.title.rendered}
                                            <p className='mt-4 text-[14px] mx-4'>
                                                {item.date}
                                            </p>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </motion.div>
            
            {/* Logo */}
            <div className="flex justify-center md:mt-20 mt-[150px] md:mb-0 mb-[25px] ">
                <div className="grid grid-cols-3 lg:gap-28 md:gap-16 gap-5">
                    <div>
                        <img src={Logo1} className="xl:w-[200px] xl:h-[180px] md:w-[150px] md:h-[150px] 
                            md:ml-0 ml-[20px] w-[100px] h-[100px]" alt='Logo 1' />
                    </div>
                    <div>
                        <img src={Logo2} className="xl:w-[200px] xl:h-[180px] md:w-[180px] md:h-[150px] 
                            w-[130px] h-[100px]" alt='Logo 2' />
                    </div>
                    <div>
                        <img src={Logo3} className="xl:w-[200px] xl:h-[180px] md:w-[150px] md:h-[150px] 
                            w-[115px] h-[115px] md:mt-[-10px] mt-[-20px]" alt='Logo 3' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SectionWrapper(Service, "service")
