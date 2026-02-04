import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Google } from "../../assets/icons";
import { Button } from "../../components";
import { Avatar1, Avatar2 } from "../../assets/images";
import TestimonialsItems from "../../components/testimonialsItems";
import "./styles.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Savannah Nguyen",
      email: "savannahnguyen@gmail.com",
      avatar: Avatar1,
      review:
        "Sagittis sed tortor, elementum vitae sodales consectetur. Vitae arcu ut morbi bibendum ullamcorper feugiat. Venenatis hendrerit cursus egestas sit ornare nunc vulputate aliquam sapien. Pulvinar nunc consectetur nibh consectetur mollis mauris est mauris amet. Sed hac vehicula id et dui morbi quam pulvinar condimentum. Senectus varius interdum nunc, arcu vulputate massa.",
      rating: 5,
    },
    {
      name: "Ronald Richards",
      email: "ronaldrichards@gmail.com",
      avatar: Avatar2,
      review:
        "Placerat pulvinar in amet sem id dignissim est pellentesque mi qi. Porttitor blandit auctor odio a or bibendum molestie.",
      rating: 4,
    },
    {
      name: "Eleanor Pena",
      email: "eleanorpena@gmail.com",
      avatar: Avatar1,
      review:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      rating: 3,
    },
  ];

  return (
    <section className="bg-[#F5F5F5] ">
      <div className="containers flex py-25">
        <div className="w-117.5 bg-white rounded-tl-[20px] rounded-bl-[20px] p-17.5">
          <div className="flex gap-2 mb-4">
            <img src={Google} alt="google" />
            <a className="text-[#4285F4] font-medium">From Google</a>
          </div>

          <h2 className="text-[38px] font-medium leading-12.5 mb-2">
            Hear what the community is saying
          </h2>

          <div className="w-82.5 h-0.5 my-7.5 bg-linear-to-r from-[#EA4335] 19.83% via-[#FBBC05] 65% 82.29% to-[#4285F4]"></div>

          <p className="text-[#555555] font-medium text-sm mb-4">
            More interesting reviews on Instagram
          </p>

          <Button
            title={"Instagram"}
            extraStyle={
              "!text-black py-4.5 px-12.5 border-[1.5px] gradient-btn gradient-text"
            }
          />
        </div>

        <div className="bg-[#299764] max-w-182.5 rounded-tr-[20px] rounded-br-[20px] py-12.5 pl-10 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.6}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              type: "progressbar",
              el: ".testimonial-progressbar",
            }}
            className="h-full w-full testimonials-swiper"
            style={{ paddingBottom: "60px" }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide>
                <TestimonialsItems key={index} item={item} />
              </SwiperSlide>
            ))}

            <div className="mt-7.5 relative flex gap-2 z-50">
              <div className="absolute w-136.5">
                <div className="testimonial-progressbar h-1"></div>
              </div>

              <div className="absolute -bottom-6 right-6 flex gap-3 text-black">
                <Button
                  icon={faChevronLeft}
                  extraStyle={
                    "testimonial-prev w-10 h-10 bg-white !text-black shadow-md"
                  }
                />
                <Button
                  icon={faChevronRight}
                  extraStyle={
                    "testimonial-next w-10 h-10 bg-white !text-black shadow-md"
                  }
                />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
