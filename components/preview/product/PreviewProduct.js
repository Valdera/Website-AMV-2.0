import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ButtonRounded from "@components/button/rounded/ButtonRounded";
import { Image } from "@chakra-ui/react";
import CardRobot from "@components/card/robot/CardRobot";

const PreviewProduct = () => {
  return (
    <section className="bg-background">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-center text-primary-400 md:text-4xl">
          Preview of our products
        </h1>
        <p className="mb-16 text-lg text-center text-white">
          Organizations of all sizes trust Autonomous Marine Vehicle to Lorem
          Ipsum
        </p>

        <div className="mt-4">
          <div className="swiper">
            <Swiper
              modules={[Pagination]}
              loop={true}
              pagination={{
                type: "progressbar",
                el: ".swiper-pagination",
              }}
              slidesPerView="auto"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={32}
              autoplay={true}
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SwiperSlide
                  key={i}
                  className="swiper-slide bg-white rounded-lg"
                >
                  <CardRobot />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="max-w-3xl rounded-md bg-primary-400 mx-auto mt-8 swiper-pagination bottom-0 relative"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonRounded>See More</ButtonRounded>
      </div>
    </section>
  );
};

export default PreviewProduct;
