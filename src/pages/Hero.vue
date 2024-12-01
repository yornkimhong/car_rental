<template>
  <section id="hero" class="relative">
    <div class="container max-w-7xl mx-auto px-6">
      <div data-aos="fade-up" class="flex flex-col justify-center items-center md:items-start min-h-[700px] space-y-8">
        <div  class="flex flex-col space-y-6  text-center md:text-left">
          <h1
            class="font-serif font-bold leading-[125%] max-w-3xl text-white text-4xl md:text-5xl lg:text-[56px]"
          >
            Drive Your Dream <span class="text-red font-serif">Car Today</span>,
            Experience Luxury
          </h1>
          <p class="text-gray leading-[150%] max-w-2xl">
            Experience the best car rental service with affordable rates and a
            wide selection of vehicles to suit your needs. Whether it’s a road
            trip, business meeting, or weekend getaway, we’ve got you covered
          </p>
        </div>
        <div class="block">
          <button
            class="text-lg font-semibold uppercase tracking-tightest py-3 px-6 bg-red text-white hover:bg-redHover transition-all duration-100 ease-in-out"
          >
            book now
          </button>
        </div>
      </div>
    </div>
    <div 
      class="absolute -bottom-11 left-1/2 transform -translate-x-1/2 bg-bgBlack hidden md:block"
    >
      <div 
        class="flex items-center justify-center space-x-4 lg:w-[1000px] w-full px-8 h-[100px]"
      >
        <!-- Choose Location -->
        <div class="flex items-center space-x-4 bg-lightBlack px-4 py-4">
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
            fill="#F8F8F8"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#F8F8F8"
                d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
              ></path>
            </g>
          </svg>
          <select
            class="bg-lightBlack text-white focus:outline-none cursor-pointer"
          >
            <option class="bg-gray-800 text-white" selected>
              Choose location
            </option>
            <option class="bg-gray-800 text-white">Location 1</option>
            <option class="bg-gray-800 text-white">Location 2</option>
          </select>
        </div>
        <!-- pick-up Location -->
        <div class="flex items-center space-x-4 bg-lightBlack px-4 py-4">
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
            fill="#F8F8F8"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#F8F8F8"
                d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
              ></path>
            </g>
          </svg>
          <select
            class="bg-lightBlack text-white focus:outline-none cursor-pointer"
          >
            <option class="bg-gray-800 text-white" selected>
              Pick-up date
            </option>
            <option class="bg-gray-800 text-white">Location 1</option>
            <option class="bg-gray-800 text-white">Location 2</option>
          </select>
        </div>
        <!-- return Location -->
        <div class="flex items-center space-x-4 bg-lightBlack px-4 py-4">
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
            fill="#F8F8F8"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#F8F8F8"
                d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
              ></path>
            </g>
          </svg>
          <select
            class="bg-lightBlack text-white focus:outline-none cursor-pointer"
          >
            <option class="bg-gray-800 text-white" selected>Return date</option>
            <option class="bg-gray-800 text-white">Location 1</option>
            <option class="bg-gray-800 text-white">Location 2</option>
          </select>
        </div>
        <button
          class="text-lg font-medium uppercase tracking-tightest py-3 px-6 bg-red text-white hover:bg-redHover transition-all duration-100 ease-in-out"
        >
          search
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
