import { useState } from "react"
import Logo from '../assets/logo/logo.png'
import { Link } from 'react-scroll';


import { motion } from "framer-motion";
import menu from '../assets/menu.svg'
import close from "../assets/close.svg"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="absolute z-10 w-full bg-transparent p-4 flex justify-between items-center"
    >
      <div className="flex items-center mt-[5px]">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="md:w-[130px] md:h-[80px] w-[100px] h-[70px] mr-4" />
      </div>
      <div className="hidden sm:block">
        <div className=" flex items-center lg:mx-24 md:mx-4 mt-[-10px]">
          <button onClick={() => scrollToSection('home')} className="text-white lg:mr-10 md:mr-7 font-IBM">หน้าแรก</button>
          <button onClick={() => scrollToSection('about-us')} className="text-white lg:mr-10 md:mr-7 font-IBM">เกี่ยวกับเรา</button>
          <button onClick={() => scrollToSection('services')} className="text-white lg:mr-10 md:mr-7 font-IBM">บริการของเรา</button>
          <button onClick={() => scrollToSection('blog')} className="text-white lg:mr-10 md:mr-7 font-IBM">บทความ</button>
          <button onClick={() => scrollToSection('contact')} className="text-white lg:mr-10 md:mr-7 font-IBM">ติดต่อเรา</button>
          <div className="w-[2px] h-[25px] bg-white lg:mr-7 md:mr-7" />
          <button className="text-white">EN</button>

        </div>

      </div>

      <div className="md:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] object-contain cursor-pointer mx-2 mt-[-10px]"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[#120c5eda]
            absolute top-20 right-0 md:mx-8 mx-8 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-non flex justify-end items-start flex-col gap-4">
            <li
              className="grid grid-cols-1 gap-3"
            >
              <div>
                <a href='/' className="text-white font-IBM">
                  หน้าแรก
                </a>
              </div>
              <div>
                <a href='/' className="text-white font-IBM">
                  เกี่ยวกับเรา
                </a>
              </div>
              <div>
                <a href='/' className="text-white font-IBM">
                  บริการของเรา
                </a>
              </div>
              <div>
                <a href='/' className="text-white font-IBM">
                  บทความ
                </a>
              </div>
              <div>
                <a href='/' className="text-white font-IBM">
                  ติดต่อเรา
                </a>
              </div>
              <div>
                <a href='/' className="text-white font-IBM">
                  EN
                </a>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar
