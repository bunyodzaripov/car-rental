import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { HeroImg1, HeroImg2, HeroImg3 } from "../../assets/images";
import { LeftArrow, RightArrow } from "../../assets/icons";
import { Button } from "../../components/";

function Hero() {
  const slides = [
    {
      title: "Compact cars",
      subtitle:
        "Rent cars as you are comfortable and where you are comfortable.",
      image: HeroImg1,
    },
    {
      title: "Sports cars",
      subtitle: "Explore every road with power, comfort, and modern style.",
      image: HeroImg2,
    },
    {
      title: "Vans",
      subtitle: "Experience the ultimate elegance and performance.",
      image: HeroImg3,
    },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="rounded-[20px] overflow-hidden mt-5 h-125"
      >
        <button className="swiper-button-prev">
          <img src={LeftArrow} alt="left arrow prev" />
        </button>
        <button className="swiper-button-next">
          <img src={RightArrow} alt="right arrow next" />
        </button>

        {slides.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 z-10 flex flex-col items-center mt-15 text-center">
              <h2 className="text-white text-[36px] font-semibold">
                {item.title}
              </h2>
              <p className="text-white mt-2.5 w-104">{item.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center z-10 relative -top-6.5">
        <div className="flex items-center bg-white rounded-full shadow-lg pl-7 pr-1.75 py-1.75 w-110">
          <input
            type="text"
            placeholder="Find the car of your dreams"
            className="flex-1 bg-transparent outline-none placeholder-[#555555]"
          />
          <Button
            extraStyle={"bg-[#299764] w-11 h-11 hover:bg-[#077743]"}
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
