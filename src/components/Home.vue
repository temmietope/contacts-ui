<template>
  <div class="home">
    <Navigation @nav-toggled="handleToggle" />
    <div class="home-body">
      <SideBar :activeNav="getActive"/>
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
    handleToggle(ev) {
      this.active = ev
    },
  },
  computed: {
    getActive(){
      return this.active
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
.home-body {
  display: flex;
}
@media screen and (max-width: 768px) {
  .home {
    position: relative
  }
}
</style>
