<template>
  <section id="category" class="py-8">
    <div class="container max-w-7xl mx-auto px-6">
      <transition name="fade-button" appear="true">
        <button
          @click="goBack"
          class="pb-8 flex items-center space-x-2 px-6 md:px-0"
        >
          <svg
            width="32px"
            height="26px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#E82026"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                fill="#E82026"
              ></path>
            </g>
          </svg>
          <span class="font-serif font-medium capitalize text-md">go back</span>
        </button>
        
      </transition>
      <div class="flex flex-col space-y-3 text-center">
        <h2 data-aos="fade-left"
          class="font-serif font-bold text-black text-3xl md:text-start md:text-4xl lg:text-5xl capitalize"
        >
          List Our Cars
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div
        data-aos="fade-up"
          v-for="(car, index) in CategoryFilter"
          :key="index"
          class="flex flex-col justify-center bg-gray rounded-sm shadow-lg"
        >
        <router-link :to="{name: 'CarDetail', params: {id: car.id}}">          <div class="w-full bg-bgGray rounded-t-sm">
            <img :src="car.image" alt="" class="object-cover w-full h-full" />
          </div>
          <div class="flex justify-between items-end p-2">
            <div class="flex flex-col space-y-4">
              <div class="flex flex-col space-y-1">
                <h4 class="text-md text-black font-semibold">
                  {{ car.model }}
                </h4>
                <p class="text-sm text-red font-medium">{{ car.brand }}</p>
              </div>
              <h4 class="font-serif font-semibold text-xl">
                <span class="font-serif text-red">${{ car.price_per_day }}</span
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
import { useRoute, useRouter } from "vue-router";
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
    const route = useRoute();
     const router = useRouter();
    const goBack = () => {
      router.go(-1); // Go back to the previous page (product list)
    };
    const name = route.params.name;
    const cars = [
      ...BMW,
      ...Mahindra,
      ...MarutiSuzuki,
      ...Toyota,
      ...Hyundai,
      ...MercedesBenz,
    ];

    const CategoryFilter = computed(() => {
      return cars.filter((car) => car.brand === name);
    });
    return { CategoryFilter,goBack };
  },
};
</script>

<style scoped>


.fade-button-enter-active,
.fade-button-leave-active {
  transition: all 1s ease;
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

</style>
