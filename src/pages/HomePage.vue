<template>
  <Navbar />
  <Hero />
  <Brand />
  <About />
  <Category />
  <Trending />
  <Choose />
  <FQA />
  <Promotion />
  <Testimonial />
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "./Hero.vue";
import Brand from "./Brand.vue";
import About from "./About.vue";
import Category from "./Category.vue";
import Trending from "./Trending.vue";
import Choose from "./Choose.vue";
import FQA from "./FQA.vue";
import Promotion from "./Promotion.vue";
import Testimonial from "./Testimonial.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {Navbar, Hero, About, Brand, Category, Trending, Choose, FQA ,Promotion,Testimonial,Footer},
  setup() {},
};
</script>

<style></style>
