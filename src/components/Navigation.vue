<template>
  <nav>
    <div class="navigation">
      <div class="brandname">
        <span>
          <i class="fas fa-bars bars" />
        </span>
        <span class="avatar">
          <i class="fas fa-user" />
        </span>
        <h2>Contacts</h2>
      </div>
      <div class="input-tag">
        <i class="fas fa-search search"></i>
        <input type="text" v-model="searchItem" placeholder="Search" />
        <i class="fas fa-times cancel"></i>
      </div>
      <div class="info">
        <span class="settings">
          <i class="far fa-question-circle"></i>
          <i class="fas fa-cog"></i>
        </span>
        <span class="admin">
          <i class="fas fa-grip-horizontal"></i>
          <p>T</p>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      searchItem: ""
    };
  },
  watch: {
    searchItem(searched) {
      // console.log(searched);
      setTimeout(() => {
        this.$emit("searchItem", searched);
      }, 3000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  height: 7vh;
  padding: 8px;
  -webkit-tap-highlight-color: transparent;
}
.navigation {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  justify-items: center;
  align-items: center;
  height: 100%;
}
.navigation .brandname {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-right: 30px;
  box-sizing: border-box;
}
.navigation .brandname h2 {
  margin: 0;
  padding: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 24px;
  color: #5f6368;
  opacity: 1;
  font-family: "Product Sans", Arial, sans-serif;
  display: inline-block;
  padding-left: 8px;
  position: relative;
  top: -1.5px;
  vertical-align: middle;
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
  margin-bottom: 4px;
  margin-right: 4px;
}
.navigation .brandname .bars {
  color: #5f6368;
  border-radius: 50%;
  display: inline-block;
  margin: 0 4px;
  padding: 12px;
  overflow: hidden;
  vertical-align: middle;
  cursor: pointer;
  height: 24px;
  width: 24px;
  -webkit-user-select: none;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
}
.navigation .input-tag {
  display: grid;
  grid-template-columns: 10% 80% 10%;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition: background 100ms ease-in, width 100ms ease-out;
  transition: background 100ms ease-in, width 100ms ease-out;
  box-sizing: border-box;
  background: #f1f3f4;
  -webkit-border-radius: 8px;
  border-radius: 8px;
}
.navigation .input-tag .search:hover,
.cancel:hover {
  background: #81848848;
  opacity: 1;
}
.navigation .input-tag .search,
.cancel {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  border-radius: 50%;
  padding: 10px;
  box-sizing: border-box;
  color: #5f6368;
}
.navigation .input-tag .search,
.cancel i {
  margin: 0px 5px;
}
.navigation .input-tag ::placeholder {
  font-size: 15px;
}

.navigation .input-tag input {
  width: 100%;
  border: 1px solid transparent;
  background: #f1f3f4;
  outline: none;
  padding: 0 30px 0 10px;
  box-sizing: border-box;
}
.navigation .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: rgb(185, 186, 189);
  padding: 0 10px;
  box-sizing: border-box;
}
.navigation .info .settings {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation .info .settings i {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  fill: #444;
  flex-shrink: 0;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  width: 40px;
  height: 40px;
  z-index: 0;
  color: #5f6368;
  font-size: 16px;
}
.navigation .info .admin i {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  fill: #444;
  flex-shrink: 0;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  width: 40px;
  height: 40px;
  z-index: 0;
  color: #5f6368;
  font-size: 16px;
}
.navigation .info .admin i:hover {
  background: #81848848;
  opacity: 0.7;
}
.navigation .info .admin {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation .info .admin p {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  background: rgb(0, 136, 209);
  color: white;
  border-radius: 50%;
}
</style>
