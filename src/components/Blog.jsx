import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionWrapper from './SectionWrapper';

import { motion } from "framer-motion";
import { fadeIn, rightside, leftside } from '../utils/motion';
import { readNews } from '../store/api';
import { useTranslation } from 'react-i18next';


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


const Blog = () => {

    const { t } = useTranslation();
    const [data, setData] = useState([])

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
        <div id="blog" className="mt-[-25px] md:px-[65px] px-4">
            <div className="md:flex md:justify-between">
                <motion.h1
                    variants={leftside()}
                    className="lg:text-[45px] text-[40px] font-IBM">{t('บทความ')}
                    <div className="lg:mt-[-75px] lg:mx-[190px] md:mt-[-5px] mt-[-25px]">
                        <span className="text-[16px] text-[#374bb0] font-Mitr md:mt-0">
                            {t('บทความสาระน่ารู้ ที่เป็นประโยชน์')}
                        </span>
                    </div>
                </motion.h1>
                <motion.button
                    variants={rightside()}
                    className="bg-[#0a1f5b] lg:w-[150px] md:w-[130px] w-[150px] h-[45px] rounded-3xl text-white
                        ml-auto md:mt-0 mt-2 lg:text-[15px] md:text-[14px] font-Mitr">
                        {t('บทความทั้งหมด')}
                </motion.button>
            </div>

            <motion.div variants={fadeIn(0.5)} className="lg:mt-16 md:mt-14 mt-[40px] 3xl:mx-20 2xl:mx-10 md:mx-0 mx-12">
                <Slider {...Blogsetting} className="custom-slider-blog ">
                    {data.map((item, index) => (
                        <div
                            key={index} className="slick-slideBlog"
                        >
                            <img 
                                src={item.featured_media_src_url}
                                alt={item.title.rendered}
                                className="2xl:w-[350px] 2xl:h-[220px] md:w-[280px] 
                                md:h-[160px] w-[300px] h-[180px] rounded-xl object-cover"
                            />
                            <div className="xl:px-2 md:px-3 px-4 py-2">
                                <h2 className='2xl:text-[20px] text-[15px] font-Athiti md:w-[200px] 2xl:w-[336px] w-[301px]'>
                                    {item.title.rendered}
                                </h2>
                                <p className='2xl:text-[16px] text-[12px] text-gray-400 mt-2'>
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </motion.div>

        </div>
    )
}

export default SectionWrapper(Blog, 'blog')
