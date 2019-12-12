<template>
  <aside :class="{ active: active}">
    <nav>
      <a href="#">Item1</a>
      <a href="#">Item2</a>
      <a href="#">Item3</a>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      //   active: true
    };
  },
  props: {
    activeNav: Boolean
  },
  mounted() {
    console.log(this.activeNav);
    this.active = this.activeNav
  }
};
</script>

<style scoped>
aside {
  display: none;
  width: 200px;
  background: #cecece;
  height: 100vh;
}
aside::active {
  display: block;
}
aside a {
  display: block;
  padding: 10px 5px;
  color: #666;
  border-bottom: 1px solid #bbb;
}
</style>
