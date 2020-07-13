<template lang="pug">
  .container
    .row
      .col-6.subtitle.is-1 primary
</template>

<script>
export default {
  async created() {
    try {
      let res = await fetch(
        `https://source.unsplash.com/1600x900/?space`
      ).catch();
      document.body.style.backgroundImage = (await "url('") + res.url + "')";
    } catch (err) {
      console.log("Failed to load random remote image,", err);
    }
  }
}
</script>
