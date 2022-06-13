const BannerGradient = () => {
  return (
    <section class="text-white bg-gray-900">
      <div class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Understand User Flow.
            <span class="sm:block">Increase Conversion.</span>
          </h1>

          <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <a
              class="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              class="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerGradient;
