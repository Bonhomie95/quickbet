import { LiveMatches, UpcomingMatches } from '../../components';
import { MainBodySlider } from '../../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const MainBody = () => {
  return (
    <div className="md:w-1/2 w-full flex flex-col items-center justify-center gap-4">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        className="w-full items-center bg-[#60457ECC]"
      >
        {MainBodySlider.map((mainbody, index) => (
          <SwiperSlide
            key={index}
            className="flex items-start justify-between swiper-slide md:px-5 px-2 md:gap-5 gap-2"
          >
            <div className="flex flex-col items-center justify-center md:gap-10 gap-5 py-5">
              <img src={mainbody.logo} alt="Logo" />
              <div className="text-white text-center flex flex-col items-center justify-center md:gap-5 gap-2">
                <h3 className=" md:text-sm text-[10px] font-light">
                  {' '}
                  {mainbody.h3}{' '}
                </h3>
                <h1 className="md:text-md text-sm font-semibold text-center">
                  {' '}
                  {mainbody.h1}{' '}
                </h1>

                <Link
                  to={mainbody.buttonLink}
                  className="text-white bg-[#735797] hover:bg-[#674d86] w-full py-2 md:px-5 px-3 rounded-full "
                >
                  {' '}
                  {mainbody.button}{' '}
                </Link>
              </div>
            </div>
            <div className="w-full h-full">
              <img
                src={mainbody.image}
                alt="Slider Image"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <LiveMatches />
      <UpcomingMatches />
    </div>
  );
};

export default MainBody;
