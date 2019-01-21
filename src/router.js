import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Carthage from "./components/Carthage.vue";
import ElKaf from "./components/ElKaf.vue";
import Touzeur from "./components/Touzeur.vue";
import Tunisia from "./components/Tunisia.vue";
import About from "./components/About.vue";
import Top from "./components/Top.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
        path: "/carthage",
          name: "carthage",
          component: Carthage
      },
      
      {
        path: "/elkaf",
          name: "elkaf",
          component: ElKaf
      },
      {
        path: "/touzeur",
          name: "touzeur",
          component: Touzeur
      },
      {
        path: "/tunisia",
          name: "tunisia",
          component: Tunisia
      },
      {
        path: "/about",
          name: "about",
          component: About
      },
      {
        path: "/top",
          name: "top",
          component: Top
      }

    ]
});