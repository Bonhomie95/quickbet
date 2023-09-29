import { useState } from 'react';
import { sports } from '../constants';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const date = new Date();

const LiveMatches = () => {
  const [active, setActive] = useState<string | null>(null);

  const addActive = (index: string) => {
    setActive(index);
  };
  return (
    <div className="flex flex-col w-full bg-white shadow-md">
      <div className="flex items-center justify-between w-full rounded-md bg-[#735797] text-white md:px-8 px-4 md:py-2 py-1">
        <span>Live'</span>
        <span> {`${date.getHours()}:${date.getMinutes()}`} </span>
      </div>
      <div className="md:flex hidden">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          slidesPerView={5}
          loop={true}
          className="flex gap-3 items-start justify-center bg-white text-left w-full mt-0.5"
        >
          {sports.map((sport) => (
            <SwiperSlide
              key={sport.id}
              className={`text-[#222] text-center text-sm whitespace-nowrap px-1 md:px-2 py-2
              ${
                active === null && sport.id === 'football'
                  ? 'bg-[#B99DDD] text-white'
                  : sport.id === active
                  ? 'bg-[#B99DDD] text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              <Link
                key={sport.id}
                to={sport.id}
                onClick={() => addActive(sport.id)}
                className="uppercase"
              >
                {' '}
                {sport.title}{' '}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden flex">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          slidesPerView={2}
          loop={true}
          className="flex gap-3 items-start justify-center bg-white text-left w-full mt-0.5"
        >
          {sports.map((sport) => (
            <SwiperSlide
              key={sport.id}
              className={`text-[#222] text-center text-sm whitespace-nowrap px-1 md:px-2 py-2
              ${
                active === null && sport.id === 'football'
                  ? 'bg-[#B99DDD] text-white'
                  : sport.id === active
                  ? 'bg-[#B99DDD] text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              <Link
                key={sport.id}
                to={sport.id}
                onClick={() => addActive(sport.id)}
                className="uppercase"
              >
                {' '}
                {sport.title}{' '}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LiveMatches;
