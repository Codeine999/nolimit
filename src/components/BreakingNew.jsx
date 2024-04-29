import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BreakingNews } from '../data';


const BreakingNew = () => {
  return (
    <div className='hidden sm:block'>
      <div className="bg-[#111d63] p-4 flex 2xl:h-[60px] h-[50px] justify-between items-center">
        <div className="lg:px-4 md:px-2 flex gap-3">
          <div class="news-container">
            <ul>
              {BreakingNews.map((news, index) => (
                <a href={news.url} target="_blank" rel="noopener noreferrer"
                  key={index} className={index === 0 ? "start" : ""}>
                  {news.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreakingNew


