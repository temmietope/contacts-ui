<template>
  <div class="home">
    <Navigation/>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  name: "Home",
  components: {
    Navigation
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    width: 100%;
  }

</style>
