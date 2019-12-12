<template>
  <div class="home">
    <Navigation @nav-toggled="active = !active" />
    <div class="home-body">
      <SideBar :activeNav="active" />
      <Contacts />
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Contacts from "./Contacts";
import SideBar from "./SideBar.vue";

export default {
  name: "Home",
  data() {
    return {
      active: true
    };
  },
  components: {
    Navigation,
    Contacts,
    SideBar
  },
  methods: {
    showNav(show) {
      this.toggleNav = show;
      // console.log(this.toggleNav);
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  /* width 100vw */
}
.home-body {
  display: flex;
}
</style>
