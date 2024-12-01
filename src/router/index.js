import CarList from "@/components/CarList.vue";
import HomePage from "@/pages/HomePage.vue";
import CarDetail from "@/components/CarDetail.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/CarList/:name",
      name: "CarList",
      component: CarList,
      props: true,
    },
    {
      path: "/CarDetail/:id",
      name: "CarDetail",
      component: CarDetail,
      props: true,
    },
  ],
});

export default router;
