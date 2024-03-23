import Logo from '../assets/logo/logo.png'

const Footer = () => {
    return (

        <footer className="bg-[#dfeffff2] mt-12">
            <div className="mx-auto w-full max-w-screen-xl p-8 py-6 lg:py-8">
                <div className="sm:flex sm:justify-end">
                    <div className="mb-6 md:mb-0 mt-5">
                        <a href="/" className="flex justify-center items-center">
                            <img src={Logo} className="lg:w-[550px] lg:h-[200px] md:w-[500px] md:h-[180px]" alt="logo" />
                        </a>
                        <div className='grid grid-cols-3 lg:ml-4 md:ml-0 lg:mx-4 mt-4 lg:gap-0 md:gap-[60px] mx-10 ml-24 '>
                            <div>
                                <div className='bg-white w-[55px] h-[55px] rounded-full' />
                            </div>
                            <div>
                                <div className='bg-white w-[55px] h-[55px] rounded-full' />
                            </div>
                            <div>
                                <div className='bg-white w-[55px] h-[55px] rounded-full' />
                            </div>

                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 sm:gap-15 ml-12 mt-12">
                        <div className='text-center '>
                            <h2 className="mb-6 md:text-[18px] text-[25px] font-IBM ">ติดต่อเรา :</h2>
                            <ul className="text-gray-500 font-IBM">
                                <li className="mt-[-10px]">
                                    <a href="/regsiter" className="hover:underline">ที่อยู่ : เลขที่ 245 หมู่ 4 ตำบลนาหว้า อำเภอนาหว้า
                                        จังหวัดนครพนม 48180 ประเทศไทย</a>
                                </li>
                                <li className="lg:mt-6 mt-2">
                                    <a href="/play" className="hover:underline">โทร: +66627822874 </a>
                                </li>
                                <li className="lg:mt-2 mt-2">
                                    <a href="/" className="hover:underline">alua: contact@nolimit co.th </a>
                                </li>
                                <li className="lg:mt-6 mt-2">
                                    <a href="/" className="hover:underline">เวลาทำการ <br />
                                        เปิดทุกวนจนทร-ศุกร, เวลา 9AM - 3P</a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-center mt-1 '>
                            <h2 className="mb-2 font-IBM text-[18px]">เกี่ยวกับเรา</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mt-4">
                                    <a href="/" className="hover:underline font-IBM">บริการของเรา</a>
                                </li>
                                <li className="lg:mt-[18px] mt-5">
                                    <a href="/" className="hover:underline font-IBM">บทความ</a>
                                </li>
                                <li className="lg:mt-[18px] mt-5">
                                    <a href="/" className="hover:underline font-IBM">ติดต่อเรา</a>
                                </li>
                                <li className="lg:mt-[18px] mt-5">
                                    <a href="/" className="hover:underline font-IBM">ร่วมงานกับเรา</a>
                                </li>
                                <li className="lg:mt-[18px] mt-5">
                                    <a href="/" className="hover:underline font-IBM">นโยบายความเป็นส่วนตัว</a>
                                </li>
                                <li className="lg:mt-[18px] mt-5">
                                    <a href="/" className="hover:underline font-IBM">ข้อกำหนดและเงื่อนไข</a>
                                </li>
                            </ul>
                        </div>

                        <div className='text-center lg:w-[230px]'>
                            <h2 className="mb-6 font-IBM md:text-[18px] text-[25px] ">Subscribe Us:</h2>
                            <div class="lg:relative">
                                <input class='lg:rounded-full rounded-full w-full h-[50px] p-2 placeholder:p-2 font-Mitr' 
                                placeholder='E-mail ของคุณ' />
                                <button class='absolute sm:static lg:absolute lg:top-0 lg:right-0 bg-[#0a1f5b] lg:w-[100px] md:w-[150px] w-[110px] md:ml-0 ml-[-90px] h-[45px] lg:mt-[3px]
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
                    <div className="text-center mt-14">
                        <span className="text-sm text-[#6ba9df]">© 2024 by No limit.co.th All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
