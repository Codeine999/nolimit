import { useState } from "react"
import Logo from '../assets/logo/logo.webp'

import { motion } from "framer-motion";
import menu from '../assets/menu.svg'
import close from "../assets/close.svg"
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const currentPath = window.location.pathname;

  const handleLanguage = () => {
    const lang = currentPath === '/en' ? 'TH' : 'EN';
    window.location.href = '/' + lang.toLowerCase();
  };
  

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="absolute z-10 w-full bg-transparent p-4 flex justify-between items-center"
    >
      <div className="flex items-center mt-[5px]">
        <img src={Logo} alt="Logo" className="md:w-[130px] md:h-[80px] w-[100px] h-[70px] mr-4"  />
      </div>

      <div className="hidden md:block">
        <div className=" flex items-center lg:mx-24 md:mx-4 mt-[-10px]">
          <a href="/" className="text-white lg:mr-10 md:mr-7 font-IBM hover:text-gray-200">
            {t('หน้าแรก')}
          </a>
          <a href="#about-us" className="text-white lg:mr-10 md:mr-7 font-IBM hover:text-gray-200">
            {t('เกี่ยวกับเรา')}
          </a>
          <a href="#services" className="text-white lg:mr-10 md:mr-7 font-IBM hover:text-gray-200">
            {t('บริการของเรา')}
          </a>
          <a href="#blog" className="text-white lg:mr-10 md:mr-7 font-IBM hover:text-gray-200">
            {t('บทความ')}
            </a>
          <a href="#contact" className="text-white lg:mr-10 md:mr-7 font-IBM hover:text-gray-200">
            {t('ติดต่อเรา')}
          </a>
          <div className="w-[2px] h-[25px] bg-white lg:mr-7 md:mr-7" />
          <button className="text-white font-IBM" onClick={() => handleLanguage('EN')}>
              {currentPath === '/en' ? 'TH' : 'EN'}
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] object-contain cursor-pointer mx-2 mt-[-10px]"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[#1c2777da]
            absolute top-20 right-0 md:mx-8 mx-8 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-non flex justify-end items-start flex-col gap-4">
          <li className="grid grid-cols-1 gap-3">
              <a href="/" className="text-white font-IBM">{t('หน้าแรก')}</a>
              <a href="#about-us" className="text-white font-IBM">{t('เกี่ยวกับเรา')}</a>
              <a href="#services" className="text-white font-IBM">{t('บริการของเรา')}</a>
              <a href="#blog" className="text-white font-IBM">{t('บทความ')}</a>
              <a href="#contact" className="text-white font-IBM">{t('ติดต่อเรา')}</a>
            </li>
              <button className="text-white font-IBM" onClick={() => handleLanguage('EN')}>
              {currentPath === '/en' ? 'TH' : 'EN'}
              </button>
          </ul>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar
