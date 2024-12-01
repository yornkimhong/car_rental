<template>
  <section id="category" class="pt-32">
    <div class="container max-w-7xl mx-auto px-6">
      <div class="flex flex-col space-y-3 text-center md:text-left">
        <h2
          data-aos="fade-left"
          class="font-serif font-bold text-black text-3xl md:text-start md:text-4xl lg:text-5xl capitalize"
        >
          Browse Our Categories
        </h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
        <router-link
          :to="{ name: 'CarList', params: { name: category.name } }"
          class="bg-gray rounded-sm flex flex-col items-center justify-center shadow-lg"
          v-for="category in categories"
          :key="category.id"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <div class="bg-bgGray w-full rounded-sm">
            <img
              :src="category.image"
              alt=""
              class="object-cover rounded-lg cursor-pointer py-2"
            />
          </div>

          <p class="text-black font-medium text-lg p-2">{{ category.name }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { categories } from "@/data";
export default {
  setup() {
    
    return { categories };
  },
};
</script>

<style></style>
