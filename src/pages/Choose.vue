<template>
  <section id="choose" class="pt-32">
    <div class="container max-w-7xl mx-auto px-6">
      <div class="flex justify-center">
        <h2 data-aos="fade-up" 
          class="font-serif font-bold leading-[125%] text-black text-center text-3xl max-w-lg md:text-4xl lg:text-5xl capitalize"
        >
          Find the <span class="font-serif text-red">Perfect Car</span> for Your
          Journey
        </h2>
      </div>

      <div data-aos="fade-up" data-aos-duration="2500"
        class="flex flex-col space-y-8 justify-between items-center lg:flex-row md:space-y-0 pt-24"
      >
        <div class="flex flex-col">
          <button
            @click="selectCar(choose)"
            v-for="choose in carChooses"
            :key="choose.id"
            :class="{
              active: selectedCar && selectedCar.id === choose.id,
            }"
            class="border-x-2 border-t-2 last:border-b-2 border-gray w-96 lg:w-72 text-center py-2"
          >
            <h4 class="text-lg font-semibold">{{ choose.model }}</h4>
          </button>
        </div>
        <div v-if="selectedCar">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedCar.id"
              :src="selectedCar.image"
              :alt="selectedCar.model"
              class="object-cover h-52 md:h-64"
            />
          </transition>
        </div>
        <transition name="fade-list" mode="out-in">
          <div v-if="selectedCar" :key="selectedCar.id" class="flex flex-col">
            <div
              class="border-x-2 border-t-2 border-gray w-96 lg:w-80 text-center py-2"
            >
              <div class="flex justify-between items-center px-8">
                <h4 class="text-lg font-semibold">Brand:</h4>
                <h4 class="text-md">{{ selectedCar.brand }}</h4>
              </div>
            </div>
            <div
              class="border-x-2 border-t-2 border-gray w-96 lg:w-80 text-center py-2"
            >
              <div class="flex justify-between items-center px-8">
                <h4 class="text-lg font-semibold">Model:</h4>
                <h4 class="text-md">{{ selectedCar.model }}</h4>
              </div>
            </div>
            <div
              class="border-x-2 border-t-2 border-gray w-96 lg:w-80 text-center py-2"
            >
              <div class="flex justify-between items-center px-8">
                <h4 class="text-lg font-semibold">Category:</h4>
                <h4 class="text-md">{{ selectedCar.category }}</h4>
              </div>
            </div>
            <div
              class="border-x-2 border-t-2 border-gray w-96 lg:w-80 text-center py-2"
            >
              <div class="flex justify-between items-center px-8">
                <h4 class="text-lg font-semibold">Price:</h4>
                <h4 class="text-md">
                  {{ selectedCar.price_per_day }}$ per day
                </h4>
              </div>
            </div>
            <div
              class="border-x-2 border-t-2 border-gray w-96 lg:w-80 text-center py-2"
            >
              <div class="flex justify-between items-center px-8">
                <h4 class="text-lg font-semibold">Mileage:</h4>
                <h4 class="text-md">{{ selectedCar.mileage }}</h4>
              </div>
            </div>
            <div
              class="border-x-2 border-t-2 last:border-b-2 border-gray w-96 lg:w-80 text-center py-2"
            >
              <div class="flex justify-between items-center px-8">
                <h4 class="text-lg font-semibold">Seating:</h4>
                <h4 class="text-md">
                  {{ selectedCar.seating_capacity }} seats
                </h4>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
  <br /><br /><br /><br />
</template>

<script>
import { onMounted, ref } from "vue";
import { carChooses } from "../data";
export default {
  setup() {
    const selectedCar = ref(null);

    const selectCar = (car) => {
      selectedCar.value = car;
    };
    onMounted(() => {
      if (carChooses.length > 0) {
        selectedCar.value = carChooses[0];
      }
    });
    return { carChooses, selectCar, selectedCar };
  },
};
</script>

<style scoped>
.active {
  background-color: #e82026;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-70px);
}
.fade-list-enter-active,
.fade-list-leave-active {
  transition: all 0.5s ease;
}
.fade-list-enter-from,
.fade-list-leave-to {
  opacity: 0;
}
@media (max-width: 976px) {
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-70px);
  }
}
</style>
