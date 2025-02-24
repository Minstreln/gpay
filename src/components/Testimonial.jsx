import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "../constants/index";

function Testimonial() {
  return (
    <section className="py-12">
      <div className="mb-12 text-center">
        <span className="font-[Poppins] text-sm text-[14px] font-semibold uppercase">
          Testimonials
        </span>
        <h2 className="mt-5 font-[Poppins] text-2xl font-bold tracking-wide text-[#1E293B] lg:text-4xl">
          What Our Customer Says
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-5 pb-64"
        style={{ paddingBottom: "56px" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="cursor-pointer rounded-lg bg-white p-6 text-center shadow-lg">
              <div className="mt-3 flex justify-center">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{testimonial.text}</p>
              <div className="mt-4 flex items-center justify-center space-x-3">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
