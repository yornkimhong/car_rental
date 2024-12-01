<template>
  <div class="relative container max-w-7xl mx-auto">
    <transition name="fade-button" appear="true">
      <button
        @click="goBack"
        class="absolute top-10 flex items-center space-x-2 px-6 md:px-0"
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
    <div
      v-if="car"
      class="flex flex-col px-6 pt-36 min-h-screen space-y-16 space-x-0 md:flex-row md:items-center md:space-y-0 md:space-x-16 md:pt-0 md:px-6"
     
    >
      <transition name="fade-left" appear="true">
        <img
          :src="car.image"
          :alt="car.title"
          class="h-48 md:h-56 lg:h-96"
        />
      </transition>

      <transition name="fade-right" appear="true">
        <div class="flex flex-col space-y-2 w-full md:w-1/2">
          <h3 class="font-serif text-red uppercase text-lg font-bold">
            {{ car.brand }}
          </h3>
          <h2 class="font-serif text-black capitalize text-3xl font-bold">
            {{ car.model }}
          </h2>

          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              Category :
            </h3>
            <h4 class="text-lg">{{ car.category }}</h4>
          </div>
          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              Year :
            </h3>
            <h4 class="text-lg">{{ car.year }}</h4>
          </div>
          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              Availability :
            </h3>
            <h4 class="text-lg">{{ car.availability }}</h4>
          </div>
          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              Location :
            </h3>
            <h4 class="text-lg">{{ car.location }}</h4>
          </div>
          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              Transmission :
            </h3>
            <h4 class="text-lg">{{ car.transmission }}</h4>
          </div>
          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              fuel_type :
            </h3>
            <h4 class="text-lg">{{ car.fuel_type }}</h4>
          </div>
          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              seating_capacity :
            </h3>
            <h4 class="text-lg">{{ car.seating_capacity }} seats</h4>
          </div>
          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              features :
            </h3>
            <h4
              class="text-lg"
              v-for="(features, index) in car.features"
              :key="index"
            >
              {{ features }},
            </h4>
          </div>
          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              air_conditioning :
            </h3>
            <h4 class="text-lg">{{ car.air_conditioning }}</h4>
          </div>
          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              mileage :
            </h3>
            <h4 class="text-lg">{{ car.mileage }}</h4>
          </div>
          <div
            class="flex justify-between items-center border-b-2 border-gray pb-2"
          >
            <h3 class="font-serif text-black capitalize text-xl font-bold">
              rating :
            </h3>
            <h4 class="text-lg">{{ car.rating }} Star</h4>
          </div>
          <div class="flex justify-between items-center py-2">
            <h4 class="text-3xl text-red font-bold font-serif">
              {{ car.price_per_day }}$/day
            </h4>
            <button
              class="text-lg font-semibold uppercase tracking-tightest py-3 px-6 bg-red text-white hover:bg-redHover transition-all duration-100 ease-in-out"
            >
              book now
            </button>
          </div>
        </div>
      </transition>
    </div>
    <div v-else>
      <p
        class="text-center text-red-500 min-h-screen flex items-center justify-center text-4xl"
      >
        Product not found...
      </p>
    </div>
  </div>
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
      router.go(-1);
    };
    const car = computed(() => {
      const allCars = [
        ...BMW,
        ...Mahindra,
        ...MarutiSuzuki,
        ...Hyundai,
        ...MercedesBenz,
        ...Toyota,
      ];
      return allCars.find((car) => car.id === Number(route.params.id));
    });
    return { goBack, car };
  },
};
</script>

<style scoped>
.fade-left-enter-active,
.fade-left-leave-active {
  transition: all 1s ease;
}
.fade-left-enter-from,
.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 1s ease;
}
.fade-right-enter-from,
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

.fade-button-enter-active,
.fade-button-leave-active {
  transition: all 1s ease;
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
@media (max-width: 768px) {
  .fade-left-enter-active,
  .fade-left-leave-active {
    transition: all 1s ease;
  }
  .fade-left-enter-from,
  .fade-left-leave-to {
    opacity: 0;
    transform: translateY(40px);
  }

  .fade-right-enter-active,
  .fade-right-leave-active {
    transition: all 1.5s ease;
  }
  .fade-right-enter-from,
  .fade-right-leave-to {
    opacity: 0;
    transform: translateY(40px);
  }
  
}
</style>
