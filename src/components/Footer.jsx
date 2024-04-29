import Logo from '../assets/logo/logo.webp'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer id="contact" className="bg-[#dfeffff2] mt-[-50px]">
            <div className="w-full max-w-screen-xl p-8 py-6 lg:py-8 2xl:mx-[200px] lg:mx-[0px]">
                <div className="sm:flex sm:justify-end">
                    <div className="mb-6 md:mb-0 mt-5">
                        <a href="/" className="flex justify-center items-center">
                            <img src={Logo} className="lg:w-[660px] lg:h-[180px] md:w-[380px] md:h-[140px]" alt="Footer Logo" />
                        </a>
                        
                        <div className='grid grid-cols-3 lg:ml-4 md:ml-0 lg:mx-5 mt-4 lg:gap-10 md:gap-[60px] sm:mx-5 mx-10 ml-16 '>
                            <div>
                                <div className='bg-white w-[50px] h-[50px] rounded-full' alt="Logo 1" />
                            </div>
                            <div>
                                <div className='bg-white w-[50px] h-[50px] rounded-full' alt="Logo 2" />
                            </div>
                            <div>
                                <div className='bg-white w-[50px] h-[50px] rounded-full' alt="Logo 3" />
                            </div>

                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 sm:gap-15 3xl:gap-[70px] xl:gap-20 md:ml-12 mt-12">
                        <div className='text-center '>
                            <h2 className="mb-6 md:text-[18px] text-[25px] font-IBM ">{t('ติดต่อเรา')} :</h2>
                            <ul className="text-gray-500 font-IBM">
                                <li className="mt-[-10px]">
                                    <a href="/regsiter" className="hover:underline"> {t('ที่อยู่ : เลขที่ 245 หมู่ 4 ตำบลนาหว้า อำเภอนาหว้า จังหวัดนครพนม 48180 ประเทศไทย')}</a>
                                </li>
                                <li className="lg:mt-6 mt-2">
                                    <a href="/play" className="hover:underline">{t('โทร: +66627822874')} </a>
                                </li>
                                <li className="lg:mt-2 mt-2">
                                    <a href="/" className="hover:underline">alua: contact@nolimit co.th</a>
                                </li>
                                <li className="lg:mt-6 mt-2">
                                    <a href="/" className="hover:underline">{t('เวลาทำการ')} <br />
                                        {t('เปิดทุกวันจันทร-ศุกร์, เวลา 9AM - 3P')}</a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-center mt-1 '>
                            <h2 className="mb-2 font-IBM text-[18px]">{t('เกี่ยวกับเรา')}</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mt-4">
                                    <a href="/" className="hover:underline font-IBM">{t('บริการของเรา')}</a>
                                </li>
                                <li className="lg:mt-[18px] mt-5">
                                    <a href="/" className="hover:underline font-IBM">{t('บทความ')}</a>
                                </li>
                                <li className="lg:mt-[18px] mt-5">
                                    <a href="/" className="hover:underline font-IBM">{t('ติดต่อเรา')}</a>
                                </li>
                                <li className="lg:mt-[18px] mt-5">
                                    <a href="/" className="hover:underline font-IBM">{t('ร่วมงานกับเรา')}</a>
                                </li>
                                <li className="lg:mt-[18px] mt-5">
                                    <a href="/" className="hover:underline font-IBM">{t('นโยบายความเป็นส่วนตัว')}</a>
                                </li>
                                <li className="lg:mt-[18px] mt-5">
                                    <a href="/" className="hover:underline font-IBM">{t('ข้อกำหนดและเงื่อนไข')}</a>
                                </li>
                            </ul>
                        </div>

                        <div className='text-center 2xl:w-[300px] xl:w-[270px] lg:w-[230px]'>
                            <h2 className="mb-6 font-IBM md:text-[18px] text-[25px] ">Subscribe Us:</h2>
                            <div className="lg:relative">
                                <input className='lg:rounded-full rounded-full w-full h-[50px] p-2 placeholder:p-2 font-Mitr' 
                                placeholder= {t('E-mail ของคุณ')} />
                                <button className='absolute z-10 sm:static lg:absolute lg:top-0 lg:right-0 bg-[#0a1f5b] lg:w-[100px] md:w-[150px] w-[110px] md:ml-0 ml-[-90px] h-[45px] lg:mt-[3px]
                                 md:mt-2 mt-[3px] lg:rounded-full  rounded-full text-white font-Mitr'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:flex sm:items-center sm:justify-between mt-[-30px] ">
                <div>
                    
                </div>
                    <div className="mt-14 2xl:mx-[-50px]">
                        <span className="text-sm text-[#6ba9df]">© 2024 by No limit.co.th All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
