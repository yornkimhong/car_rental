<template>
  <section id="FQA" class="pt-32">
    <div class="container max-w-7xl mx-auto px-6">
      <div data-aos="fade-left" class="flex flex-col space-y-3 text-center md:text-left pb-16">
        <h2
          class="font-serif font-bold text-black text-3xl md:text-4xl lg:text-5xl capitalize"
        >
          <span class="font-serif text-red">Frequently</span> Asked Questions
        </h2>
        <h3
          class="font-serif font-bold text-black text-lg md:text-xl lg:text-xl capitalize"
        >
          Get Answers to Common Questions About Our Car Rental Service
        </h3>
      </div>

      <div
      data-aos="fade-up" data-aos-duration="2500"
        v-for="(faq, index) in faqs"
        :key="index"
        class="border-b-2 border-gray max-w-xl"
      >
        <button
          @click="toggleFAQ(index)"
          class="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none"
        >
          <span class="text-lg font-medium">{{ faq.question }}</span>
          <svg
            :class="{ 'rotate-180': activeFAQs[index] }"
            class="h-5 w-5 transition-all duration-75 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-if="activeFAQs[index]" class="px-2 pb-4 text-gray-700">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </section>
  <br /><br /><br />
</template>

<script>
import { ref } from "vue";
import { faqs } from "../data";

export default {
  setup() {
    const activeFAQs = ref({});

    const toggleFAQ = (index) => {
      activeFAQs.value[index] = !activeFAQs.value[index];
    };

    return { toggleFAQ, faqs, activeFAQs };
  },
};
</script>

<style></style>
