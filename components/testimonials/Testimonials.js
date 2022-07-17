import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, Badge } from "@chakra-ui/react";
import { Navigation } from "swiper";

const Testimonials = () => {
  return (
    <section className="bg-background flex justify-center">
      <div className="px-4 py-16  sm:px-6 lg:pl-8 lg:pr-0 lg:mr-0 sm:py-24 max-w-[1340px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16 gap-y-8 lg:items-center">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold text-primary-400 font-display tracking-tight sm:text-4xl">
              Dont just take our word for it...
              <br className="hidden sm:block lg:hidden" />
              Read reviews from our customers
            </h2>

            <p className="mt-4 text-white font-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                className="p-3 text-primary-500 border border-primary-500 rounded-full hover:bg-primary-500 hover:text-white prev-button"
              >
                <svg
                  className="w-5 h-5 transform -rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                className="p-3 text-primary-500 border border-primary-500 rounded-full hover:bg-primary-500 hover:text-white next-button"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <Swiper
              // className="overflow-hidden"
              modules={[Navigation]}
              loop={true}
              slidesPerView={1}
              spaceBetween={32}
              autoplay={{ delay: 100 }}
              navigation={{
                nextEl: ".next-button",
                prevEl: ".prev-button",
              }}
            >
              {[1, 2, 3].map((i) => (
                <SwiperSlide key={i}>
                  <blockquote className="flex flex-col justify-between h-full p-12 bg-white">
                    <div>
                      <Avatar
                        size="xl"
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />{" "}
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-secondary-500 sm:text-3xl">
                          Stayin&apos; Alive
                        </p>

                        <p className="mt-4 font-body leading-relaxed text-gray-500">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm text-secondary-500">
                      <Badge mr="2" colorScheme="green">
                        Ketua AMV UI 201{i}
                      </Badge>
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <button
            aria-label="Previous slide"
            className="p-4 text-primary-500 border border-primary-500 rounded-full hover:bg-primary-500 hover:text-white prev-button"
          >
            <svg
              className="w-5 h-5 transform -rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            className="p-4 text-primary-500 border border-primary-500 rounded-full hover:bg-primary-500 hover:text-white next-button"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
