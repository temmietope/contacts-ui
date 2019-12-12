<template>
  <div class="home">
    <Navigation/>
    <Contacts />
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Contacts from "./Contacts"

export default {
  name: "Home",
  components: {
    Navigation,
    Contacts
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
