import { Pagination, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export const What_we_offer: React.FC = () => {
  return (
    <>
      <div
        className="container flex flex-col gap-y-4 items-center justify-center md:mt-4 mt-0 p-5 text-center"
      >
        <p className="text-gray-900 font-semibold md:text-4xl text-3xl">
          What We Offer
        </p>
        <p className="text-gray-700 line-clamp-2">
          Sabong Network understands the unique goals and needs of each client.
          This is why our company adopts the most diverse and complete systems
          that cater for any land-based or online gaming operator through both
          standalone and hosted solutions.
        </p>
      </div>

      <div className="md:p-8 p-5">
        <Swiper
          slidesPerView={1}
          loop
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
        >
          <SwiperSlide>
            <img src="./image/1.jpg" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./image/2.jpg" alt="slide2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./image/3.jpg" alt="slide3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
