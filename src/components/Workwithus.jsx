import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionWrapper from './SectionWrapper'
import { motion } from "framer-motion";
import { fadeIn, leftside, rightside } from '../utils/motion'
import { Work } from '../data'
import { useTranslation } from 'react-i18next';
import { readLag } from '../store/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Worksetting = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 900,
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


const Workwithus = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([])
    const { lang } = useParams();

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

    // วิธีใช้ให้นำไปใส่ {renderText()}
    const renderText = () => {
        if (lang === 'en') {
            return data.enText;
        } else {
            return data.thText;
        }
    };

    return (
        <div className="md:mt-[50px] mt-12 px-[65px]">
            <div className="md:flex md:justify-between md:text-left text-center">
                <motion.h1 
                    variants={leftside()}
                    className="lg:text-[40px] md:text-[30px] text-[40px] font-IBM"
                >
                {/* {renderText()} ตัวอย่าง */}
                {t('ร่วมงานกับเรา')}
                    <div className="lg:mt-[-70px] md:mt-[-10px] mt-[-25px] lg:mx-[260px] md:mx-2">
                        <span className="text-[16px] whitespace-normal font-Mitr
                        text-[#374bb0]">{t('มาร่วมเป็นส่วนนึงกับบริษัทเรา')}</span>
                    </div>
                </motion.h1>
                <motion.button 
                    variants={rightside()}
                    className="bg-[#0a1f5b] mt-4 lg:w-[150px] md:w-[130px] w-[150px] h-[45px] rounded-3xl text-white
                    ml-auto lg:text-[15px] md:text-[14px] font-Mitr"
                >
                    {t('ตำแหน่งทั้งหมด')}
                </motion.button>
            </div>

            <div className="mt-10 ">
                <Slider {...Worksetting} className="custom-slider">
                    {Work.map((item) => (
                        <motion.div
                        variants={fadeIn(0.5)}
                        key={item.id} className=" bg-white border border-gray-400 border-opacity-70 shadow-sm 
                            2xl:h-[135px] h-[110px] rounded-xl">
                            <div className="flex justify-between p-4 mx-1">
                                <h1 className="2xl:text-[25px] lg:text-[16px] text-[16px] font-bold ">{item.title}</h1>

                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-700 3xl:w-[100px] 3xl:h-[35px] 2xl:h-[33px] w-[70px] h-[30px] rounded-2xl 
                                    text-white 3xl:text-[18px] 2xl:text-[15px] text-[14px] sm:mr-[-10px] mr-[-15px]">
                                        {t('สมัคร')}
                                    </button>
                                </a>
                            </div>

                            <div className="px-5 mt-[-10px] ">
                                <p className="2xl:text-[20px] md:text-[14px] text-[12px]">{item.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default SectionWrapper(Workwithus, 'workwithus')
