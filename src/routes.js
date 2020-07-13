import Vue from "vue";
import Router from "vue-router";
import home from "@/views/index";
import about from "@/views/about";
import contact from "@/views/contact";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
  ],
});
