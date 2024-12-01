<template>
  <section id="brand" class="w-full bg-gray mt-20">
    <div class="container max-w-7xl mx-auto py-4">
    <div 
      class="grid grid-cols-3 grid-rows-2 mx-auto px-6 gap-12 place-content-center lg:grid-cols-6 lg:grid-rows-1"
    >
      <div data-aos="zoom-in"  v-for="brand in brands" :key="brand.id" class="flex items-center justify-center ">
        <img :src="brand.image" alt="partner logo" class="object-cover" />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import {brands} from "../data"
export default {
    setup() {

        return {brands}
    }
}
</script>

<style>

</style>