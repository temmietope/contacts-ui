<template>
  <nav>
    <div class="navigation">
      <div class="brandname">
        <span title="Main menu" @click="handleClick">
          <i class="fas fa-bars bars" />
        </span>
        <span class="avatar">
          <i class="fas fa-user" />
        </span>
        <h2>Contacts</h2>
      </div>
      <div class="input-tag">
        <i class="fas fa-search search" title="Search"></i>
        <input type="text" v-model="searchItem" placeholder="Search" />
        <i class="fas fa-times cancel" title="Clear search"></i>
      </div>
      <div class="info">
        <span class="settings">
          <i class="far fa-question-circle" title="Help menu"></i>
          <i class="fas fa-cog" title="Settings menu"></i>
        </span>
        <span class="admin">
          <i class="fas fa-grip-horizontal apps" title="Google apps"></i>
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
      searchItem: "",
      active: true
    };
  },
  watch: {
    searchItem(searched) {
      // console.log(searched);
      setTimeout(() => {
        this.$emit("searchItem", searched);
      }, 3000);
    }
  },
  methods: {
    handleClick() {
      this.active = !this.active;
      this.$emit("nav-toggled", this.active);
    }
  }
};
</script>

<style scoped>
nav {
  height: 9vh;
  padding: 0.5% 1%;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  background: white;
  width: 100%;
  position: sticky;
  z-index: 1;
  top: 0;
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
  padding-right: 5%;
  box-sizing: border-box;
}
.navigation .brandname h2 {
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 200;
  line-height: 24px;
  color: #5f6368;
  opacity: 1;
  font-family: "Product Sans", Arial, sans-serif;
  display: inline-block;
  padding-left: 2%;
  position: relative;
  top: -1.5px;
  vertical-align: middle;
}
.navigation .brandname .avatar {
  background: rgb(26, 114, 232);
  color: rgb(255, 255, 255);
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 1%;
  margin-right: 1%;
}
.navigation .brandname .bars {
  color: #5f6368;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  padding-left: 0;
  overflow: hidden;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  -webkit-user-select: none;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
}
.navigation .brandname .bars:hover {
  background: #81848848;
  opacity: 1;
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
  height: 100%;
  border-radius: 50%;
  padding: 2%;
  box-sizing: border-box;
  color: #5f6368;
}
.navigation .input-tag .search,
.cancel i {
  margin: 0px 5px;
}
.navigation .input-tag .cancel {
  display: none;
}
.navigation .input-tag ::placeholder {
  font-size: 1rem;
}

.navigation .input-tag input {
  width: 100%;
  border: 1px solid transparent;
  background: #f1f3f4;
  outline: none;
  padding: 0 30px 0 10px;
  box-sizing: border-box;
  font-size: 1rem;
  color: #5f6368;
}
.navigation .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: rgb(185, 186, 189);
  padding: 0 0 0 50px;
  margin-right: 1%;
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
  font-size: 18px;
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
  font-size: 18px;
  margin-right: 10px;
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

@media screen and (max-width: 768px) {
  nav {
    height: 7vh;
    padding: 1%;
  }
  .navigation {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .navigation .brandname {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    margin-right: auto;
    padding: 0;
  }
  .navigation .brandname h2 {
    top: 0;
  }
  .navigation .brandname .avatar {
    display: none;
  }
  .navigation .brandname .bars {
    margin: 0;
    width: 2rem;
    height: 2rem;
  }
  .navigation .input-tag {
    display: flex;
    justify-items: center;
    align-items: center;
    width: 10%;
    background: white;
  }
  .navigation .input-tag .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%;
    width: 100%;
    height: 2rem;
    box-sizing: border-box;
    color: #5f6368;
  }
  .navigation .input-tag .cancel {
    display: none;
  }
  .navigation .input-tag input {
    display: none;
  }
  .navigation .info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;
    padding: 0;
  }
  .navigation .info .admin i {
    display: none;
  }
}
</style>
