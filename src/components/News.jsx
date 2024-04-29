import React, { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper'
import { motion } from "framer-motion";
import { fadeIn, leftside, rightside } from '../utils/motion'
import { readNews } from '../store/api';
import { useTranslation } from 'react-i18next';


const skeletonData = Array.from({ length: 8 }).map((_, skeleton) => ({
    id: skeleton,
}));

const News = () => {

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
            <div className='hidden sm:block'>
                <div className="lg:px-[65px] md:px-[20px] px-2">
                    <div className="w-full h-[0.1px] bg-gray-600 md:mt-20 sm:mt-44 mt-24" />
                    <div className="flex mt-10">
                        <div className="md:w-[50px] w-[80px] h-[0.1px] bg-gray-600">
                            <p className="mt-[-12px] md:ml-16 ml-24 text-blue-400">Blog</p>
                        </div>
                    </div>

                    <div className='flex justify-start px-12 mt-10'>
                        <div className='grid grid-cols-2 2xl:gap-[70px] xl:gap-[130px] lg:gap-[80px] md: gap-[20px]'>
                            <motion.div variants={leftside()} className='grid grid-cols-2 3xl:gap-[350px] 2xl:gap-[400px] lg:gap-[150px] gap-[50px]'>
                                <div>
                                    <h1 className='text-[30px] font-IBM'>{t('ข่าวสาร')}</h1>
                                    <p className='mt-1 text-[14px] text-blue-500 whitespace-nowrap font-Athiti'>{t('อัพเดทข่าวสารของบริษัท')}</p>
                                </div>
                                <div>
                                    <button className='mx-2 bg-[#0a1f5b] w-[120px] h-[40px] rounded-full 
                                        text-white font-IBM text-[14px]
                                        '>
                                        {t('ข่าวสารทั้งหมด')}
                                    </button>
                                </div>
                            </motion.div>

                            <div>
                                <motion.div variants={rightside()} className='grid grid-cols-2 2xl:gap-[450px] lg:gap-[180px] gap-[120px]'>
                                    <div>
                                        <h2 className='text-[30px] font-IBM whitespace-nowrap'>{t('คู่มือการใช้งาน')}</h2>
                                        <p className='mt-1 text-[14px] text-blue-500 whitespace-nowrap font-Athiti'>{t('คู่มือการใช้งานกับทางบริษัท')}</p>
                                    </div>
                                    <div>
                                        <button className='mx-2 bg-[#0a1f5b] w-[120px] h-[40px] rounded-full 
                                            text-white font-IBM text-[14px]
                                            '>
                                            {t('ข่าวสารทั้งหมด')}
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center mt-[-70px] px-10 '>
                        <div className='w-[0.1px] h-[700px] bg-black' />
                    </div>

                    <div className='mt-[-600px] mb-[100px] ml-12 '>
                        <motion.div variants={fadeIn(0.5)} className='grid grid-cols-2 gap-[15px]'>
                            {isLoading ? skeletonData.map((skeletonID) => (
                                <div key={skeletonID.id} className='grid grid-cols-2'>
                                    <div className='bg-gray-400 opacity-60 2xl:w-[250px] 2xl:h-[150px] w-[200px] h-[130px] rounded-xl' />
                                    <div className='mt-6 3xl:ml-[-100px] xl:mx-[-55px] lg:mx-[1px] mx-4'>
                                        <div className='bg-gray-400 opacity-60 w-[150px] h-[18px] rounded-lg' />
                                        <div className='mt-6 bg-gray-400 opacity-60 w-[150px] h-[15px] rounded-lg' />
                                    </div>
                                </div>
                            )) :
                                data.map((item, index) => (
                                    <div key={index} className='grid grid-cols-2'>
                                        <div className=''>
                                            <img
                                                src={item.featured_media_src_url}
                                                className='2xl:w-[250px] 2xl:h-[150px] w-[200px] h-[130px] rounded-xl'
                                                alt={item.categories} />
                                        </div>
                                        <div className='mt-6 3xl:ml-[-100px] xl:mx-[-55px] lg:mx-[1px] mx-4'>
                                            <h3 className='2xl:text-[23px] md:text-[16px] text-[20px] font-IBM'>
                                                {item.title.rendered}
                                            </h3>
                                            <p className='mt-4 text-gray-400 lg:text-[14px] md:text-[10px] text-[10px]'>
                                                {item.date}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className='sm:hidden block p-1'>
                <motion.div
                    variants={fadeIn()}
                    className='mt-5'
                >
                    <h1 className='text-[40px] font-IBM'>ข่าวสาร</h1>
                    <p className='mt-[-5px] text-blue-800 font-Mitr'>อัพเดทข่าวสารของบริษัท</p>
                    <button className='bg-[#0a1f5b] w-[140px] h-[40px] text-white text-[16px] 
                        rounded-3xl mt-4 font-Mitr mx-2'>
                        ข่าวสารทั้งหมด
                    </button>
                </motion.div>

                <motion.div variants={fadeIn(0.5)} className="mt-[30px] grid grid-cols-1 gap-1">
                    {isLoading ? skeletonData.map((skeleton) => (
                        <div key={skeleton.id} className={`${skeleton === 4 ? 'mt-[200px]' : ''}`}>
                            <div className={`flex  ${skeleton >= 4 && skeleton <= 7 ? 'justify-end' : ''}`}>
                                <div className='bg-gray-600 opacity-65 w-[150px] h-[90px] object-cover' alt="news" />

                            </div>
                            <div className='w-full h-[0.1px] bg-gray-400' />
                        </div>
                    ))
                        : data.map((item, index) => (
                            <div key={index} className={`${index === 4 ? 'mt-[200px]' : ''}`}>
                                <div className={`flex  ${index >= 4 && index <= 7 ? 'justify-end' : ''}`}>
                                    <img 
                                        src={item.featured_media_src_url}
                                        alt={item.categories}
                                        className='w-[150px] h-[90px] object-cover'  
                                    />
                                    <h2 className='mt-4 mx-5 w-[250px] text-[15px] font-IBM'>
                                        {item.title.rendered} <br />
                                        <p className='text-[12px] text-gray-400 mt-2 font-Mitr'>
                                            {item.date}
                                        </p>
                                    </h2>
                                </div>
                                <div className='w-full h-[0.1px] bg-gray-400' />
                            </div>
                        ))}
                </motion.div>
                <motion.div
                    variants={fadeIn()}
                    className='mt-[-540px] mb-[500px]'
                >
                    <div className='flex justify-end'>
                        <h3 className='text-[40px] font-IBM'>คู่มือการใช้งาน</h3>
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
                </motion.div>
            </div>
        </div>
    )
}

export default SectionWrapper(News, 'news')


