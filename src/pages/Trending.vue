<template>
  <section id="trending" class="pt-32">
    <div class="container max-w-7xl mx-auto px-6">
      <div data-aos="fade-up" class="flex flex-col space-y-3 text-center">
        <h2
          class="font-serif font-bold text-black text-3xl md:text-4xl lg:text-5xl capitalize"
        >
          <span class="font-serif text-red">Trending</span> Cars
        </h2>
        <h3
          class="font-serif font-bold text-black text-2xl md:text-3xl lg:text-4xl capitalize"
        >
          Explore Our Most Popular Rentals
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
   
        <div 
        data-aos="fade-up" data-aos-duration="2500"
          v-for="(trending, index) in trendingFilter"
          :key="index"
          class="flex flex-col justify-center bg-gray rounded-sm shadow-lg"
        >
          <router-link :to="{name: 'CarDetail', params: {id: trending.id}}">
          <div class="w-full bg-bgGray rounded-t-sm">
            <img
              :src="trending.image"
              alt=""
              class="object-cover w-full h-full"
            />
          </div>
          <div class="flex justify-between items-end p-2">
            <div class="flex flex-col space-y-4">
              <div class="flex flex-col space-y-1">
                <h4 class="text-md text-black font-semibold">
                  {{ trending.model }}
                </h4>
                <p class="text-sm text-red font-medium">{{ trending.brand }}</p>
              </div>
              <h4 class="font-serif font-semibold text-xl">
                <span class="font-serif text-red"
                  >${{ trending.price_per_day }}</span
                >/day
              </h4>
            </div>
            <button
              class="text-md rounded-md font-semibold uppercase tracking-tightest py-1 px-2 bg-red text-white hover:bg-redHover transition-all duration-100 ease-in-out"
            >
              Rent now
            </button>
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
 
</template>

<script>
import {
  BMW,
  Mahindra,
  MarutiSuzuki,
  Toyota,
  Hyundai,
  MercedesBenz,
} from "@/data";
import { computed } from "vue";
export default {
  setup() {
    const cars = [
      ...BMW,
      ...Mahindra,
      ...MarutiSuzuki,
      ...Toyota,
      ...Hyundai,
      ...MercedesBenz,
    ];
    const trendingFilter = computed(() => {
      return cars.filter((car) => car.trending === true);
    });
    console.log(trendingFilter);

    return { trendingFilter };
  },
};
</script>

<style></style>
