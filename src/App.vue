<template lang="pug">
  <div id="app">
    navBar
    <router-view />
  </div>
</template>
<script>
import navBar from "./components/navBar";
export default {
  components: {
    navBar
  },
  name: "App"
};
</script>
<style>
#app {
  height: 100vh;
  width: 100%;
}
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none !important;
}
</style>