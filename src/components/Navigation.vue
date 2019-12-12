<template>
  <nav>
    <div class="navigation">
      <div class="brandname">
        <span>
          <i class="fas fa-bars bars" />
        </span>
        <span>
          <i class="fas fa-user avatar" />
        </span>
        <h2>Contacts</h2>
      </div>
      <div></div>
      <div></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  height: 10vh;
  border: 1px solid black;
  padding: 8px;
}
.navigation {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  justify-items: center;
  align-items: center;
  height: 100%;
}
.navigation .brandname {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
.navigation .brandname h2 {
  margin: 0;
  padding: 0;
  font-size: 22px;
  line-height: 24px;
  color: #5f6368;
  opacity: 1;
  font-family: "Product Sans", Arial, sans-serif;
}
.navigation .brandname .avatar {
  background: rgb(26, 114, 232);
  color: rgb(255, 255, 255);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.navigation .brandname .bars {
  color: #5f6368;
}
</style>
