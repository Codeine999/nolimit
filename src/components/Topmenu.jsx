import React from 'react'

const Topmenu = () => {
  return (
    <div className='hidden md:block'>
      <div className=" bg-[#111d63] p-4 flex h-[50px] justify-between items-center">
        <div className="lg:px-4 md:px-2">
          <a href="#" className="text-white lg:text-[12px] md:text-[10px] whitespace-nowrap font-Mitr">โทร: +66627822874</a>
        </div>
        <div>
          <a href="#" className="text-white lg:mr-6 lg:text-[14px] md:text-[11px] whitespace-nowrap font-Mitr">
            บริการให้คำปรึกษา Wordoress Cloud Hostine| บริการยายเอบไซต์| บริการอดช่องไหว่ของมัลแอร์ บริการเข้าเส้น API
          </a>
        </div>
        <div className="flex mr-4 xl:ml-20 md:ml-4 gap-1">
          <div className="bg-white w-[25px] h-[25px] rounded-full mr-1" />
          <div className="bg-white w-[25px] h-[25px] rounded-full mr-1" />
          <div className="bg-white w-[25px] h-[25px] rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Topmenu



