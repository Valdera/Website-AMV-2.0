import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ButtonRounded from "@components/button/rounded/ButtonRounded";
import { Image } from "@chakra-ui/react";

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
                  <a
                    href="/product/build-your-own-drone"
                    className="relative block rounded-lg"
                  >
                    <button
                      type="button"
                      name="wishlist"
                      className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLine="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </button>

                    <Image
                      alt="Build Your Own Drone"
                      className="object-contain w-full h-56 lg:h-72"
                      src="https://www.hyperui.dev/photos/toy-1.jpeg"
                    />

                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-400">
                        New
                      </span>

                      <h5 className="mt-4 text-lg font-bold">
                        Build Your Own Drone
                      </h5>

                      <p className="mt-2 text-sm font-medium text-gray-600">
                        $14.99
                      </p>

                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-primary-500 rounded-sm"
                      >
                        <span className="text-sm font-medium">Add to Cart</span>

                        <svg
                          className="w-5 h-5 ml-1.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
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
