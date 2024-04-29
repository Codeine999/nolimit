import React, { useEffect } from 'react';
import J3k from '../assets/j3k.webp'
import SectionWrapper from './SectionWrapper'
import { motion } from "framer-motion";
import { leftside, headerside, fadeIn } from '../utils/motion'
import { useTranslation } from 'react-i18next';

const Aboutus = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const img = new Image();
        img.src = J3k;
    }, []);

    return (
        <div id="about-us" className="flex justify-center md:mt-28 mt-[-24px] md:px-5">
            <div className="grid md:grid-cols-2 2xl:gap-6">
                <motion.div variants={leftside()} className="md:mx-5">
                    <img src={J3k} className="md:w-[650px] w-full lg:h-[380px] md:h-[300px]
                        md:rounded-xl object-cover" alt='About Us Image' />
                </motion.div>

                <motion.div
                    variants={headerside()}
                    className="sm:block hidden mx-5 md:mt-0 mt-6"
                >
                    <div className="flex items-center">
                        <div className="bg-blue-400 w-[60px] h-[1.5px] 2xl:w-[90px]" />
                        <p className="ml-4 text-blue-300 font-Mitr 2xl:text-[20px]">
                            {t('เกี่ยวกับเรา')}
                        </p>
                    </div>
                    <div className='xl:mt-4 md:mt-2 mt-4'>
                        <h1 className="xl:text-[45px] lg:text-[35px] md:text-[26px] text-[35px] whitespace-normal font-IBM">
                            {t('บริษัท')}
                            <span className='text-[#374bb0] mr-2 ml-2 whitespace-normal'>
                                {t('ต้องหาเงินได้ไม่')}
                            </span>
                            {t('จำกัด')}
                        </h1>
                        <h2 className="lg:text-[35px] 2xl:text-[40px] md:text-[25px] text-[30px] text-[#fccc5d] font-Mitr">
                            {t('เป้าหมายของเรา')}
                        </h2>
                        <p className='lg:mt-2 mt-4 2xl:text-[18px] lg:text-[17px] md:text-[12px] font-Mitr xl:w-[550px]  2xl:w-[650px]'>
                            " {t('เป้าหมายของเราคือการทำเงินอย่างยั่งยืนและสำคัญโดยให้ความสำคัญในการพัฒนาและตลาดสินค้าที่มีคุณภาพ\
      และการให้บริการที่ดีเพื่อตอบสนองความต้องการของลูกค้าที่เปลี่ยนแปลงอย่างรวดเร็ว เราจะสร้างโอกาสให้กับ\
      ผู้คนในทีมของเราให้สามารถพัฒนาและเติบโตตามความสามารถของเขาและสร้างรายได้ที่มั่นคงสำหรับพวกเขาเอง\
      และองค์กรที่เราดำเนินการอยู่ด้วย')} "
                        </p>
                    </div>
                    <div className="lg:mt-6 md:mt-4 mt-6">
                        <button className="bg-[#0a1f5b] w-[130px] h-[40px] rounded-full text-white
                            text-[15px] font-Mitr">
                            {t('เป้าหมายของเรา')}
                        </button>
                    </div>
                </motion.div>

                {/* Mobile */}
                <motion.div
                    variants={fadeIn(0.8)}
                    className="sm:hidden block mx-5 md:mt-0 mt-6"
                >
                    <div className="flex items-center">
                        <div className="bg-blue-400 w-[60px] h-[1.5px] 2xl:w-[90px]" />
                        <h1 className="ml-4 text-blue-300 font-Mitr 2xl:text-[20px]">{t('เกี่ยวกับเรา')}</h1>
                    </div>
                    <div className='xl:mt-4 md:mt-2 mt-4'>
                        <h1 className="xl:text-[45px] lg:text-[35px] md:text-[26px] text-[35px] whitespace-normal font-IBM">
                            {t('บริษัท')}
                            <span className='text-[#374bb0] mr-2 ml-2 whitespace-normal'>
                                {t('ต้องหาเงินได้ไม่')}
                            </span>
                            {t('จำกัด')}
                        </h1>
                        <h1 className="lg:text-[35px] 2xl:text-[40px] md:text-[25px] text-[30px] text-[#fccc5d] font-Mitr">
                            {t('เป้าหมายของเรา')}
                        </h1>
                        <p className='lg:mt-2 mt-4 2xl:text-[18px] lg:text-[17px] md:text-[12px] font-Mitr xl:w-[550px]  2xl:w-[650px]'>
                            " {t('เป้าหมายของเราคือการทำเงินอย่างยั่งยืนและสำคัญโดยให้ความสำคัญในการพัฒนาและตลาดสินค้าที่มีคุณภาพ\
                                และการให้บริการที่ดีเพื่อตอบสนองความต้องการของลูกค้าที่เปลี่ยนแปลงอย่างรวดเร็ว เราจะสร้างโอกาสให้กับ\
                                ผู้คนในทีมของเราให้สามารถพัฒนาและเติบโตตามความสามารถของเขาและสร้างรายได้ที่มั่นคงสำหรับพวกเขาเอง\
                                และองค์กรที่เราดำเนินการอยู่ด้วย')} "
                        </p>
                    </div>

                    <div className="lg:mt-6 md:mt-4 mt-6">
                        <button className="bg-[#0a1f5b] w-[130px] h-[40px] rounded-full text-white
                            text-[15px] font-Mitr">
                            {t('เป้าหมายของเรา')}
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default SectionWrapper(Aboutus, 'About')
