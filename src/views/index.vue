<template lang="pug">
  .container
    .row
      .col-6.subtitle.is-1 primary
    Loading(
      :active.sync="isLoading",
      is-full-page=true,
      color= '#28a745',
      background-color= '#ffffff')
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  data() {
    return {
      isLoading: true
    };
  },
  components: {
    Loading,
  },
  async created() {
    await (this.isLoading = true);
    try {
      let res = await fetch(
        `https://source.unsplash.com/1600x900/?space`
      ).catch();
      document.body.style.backgroundImage = (await "url('") + res.url + "')";
    } catch (err) {
      console.log("Failed to load random remote image,", err);
    }
    await (this.isLoading = false);
  }
};
</script>
