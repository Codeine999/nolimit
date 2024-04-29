import { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { classNames } from '../utils/motion'


 const ScrollToTop = () => {
  
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 2000) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 ">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-[#1c2777]  hover:bg-[#2f3978] inline-flex items-center rounded-lg p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2',
        )}
      >
        <IoIosArrowUp className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

export default ScrollToTop;