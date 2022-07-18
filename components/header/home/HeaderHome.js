import { Image } from "@chakra-ui/react";
import ButtonBasic from "@components/button/basic/ButtonBasic";

const HeaderHome = () => {
  return (
    <div className="relative">
      <Image
        src="asset/home_background.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-secondary-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 153"
        >
          <path
            fill="#1F2937"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                Autonomous Marine Vehicle <br className="hidden md:block" />
                Universitas Indonesia
              </h2>
              <p className="max-w-xl font-medium font-body mb-4 text-base text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>

              <ButtonBasic>Learn More</ButtonBasic>
            </div>
            <div className="w-full h-full hidden xl:block  max-w-3xl xl:px-10 xl:w-8/12 md:flex md:justify-center">
              <Image src="asset/home_icon.svg" className="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
