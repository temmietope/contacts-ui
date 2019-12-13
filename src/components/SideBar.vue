<template>
  <aside :class="{ active: active}">
    <nav>
      <div class="aside-bar">
        <i class="fas fa-grip-vertical" />
      </div>
      <h2>
        <span>Google</span> Contacts
      </h2>
      <button class="btn">
        <i class="fas fa-plus"></i>
        <span>Create contact</span>
      </button>
      <ul>
        <li>
          <i class="far fa-user"></i>
          <span>Contacts</span>
        </li>
        <li>
          <i class="fas fa-history"></i>
          <span>Frequently contacted</span>
        </li>
        <li>
          <i class="far fa-clone"></i>
          <span>Duplicates</span>
        </li>
      </ul>
      <ul>
        <li>
          <i class="fas fa-chevron-up"></i>
          <span>Labels</span>
        </li>
        <li>
          <i class="fas fa-tag"></i>
          <span>Restored from phone</span>
        </li>
        <li>
          <i class="fas fa-tag"></i>
          <span>Track</span>
        </li>
        <li>
          <i class="fas fa-plus"></i>
          <span>Create label</span>
        </li>
      </ul>
      <ul>
        <li>
          <i class="fas fa-upload"></i>
          <span>Import</span>
        </li>
        <li>
          <i class="fas fa-cloud-download-alt"></i>
          <span>Export</span>
        </li>
        <li>
          <i class="fas fa-print"></i>
          <span>Print</span>
        </li>
      </ul>
      <ul>
        <li>
          <i class="fas fa-download"></i>
          <span>Other contacts</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import EventBus from "../EventBus";

export default {
  name: "SideBar",
  data() {
    return {
      active: {
        type: Boolean,
        default: true
      }
    };
  },
  created() {
    EventBus.$on("nav-toggled", ev => {
      this.active = ev;
    });
    //     if (window.innerWidth < 768) {
    //       this.active = false
    //     }
    //     return this.active
  }
};
</script>

<style scoped>
aside {
  display: none;
  background: #ffffff;
  height: 90vh;
  bottom: 0;
}
aside.active {
  display: block;
  box-sizing: border-box;
  color: #616161;
  position: relative;
  width: 25%;
  padding-bottom: 24px;
}
aside .aside-bar {
  display: none;
}
aside nav {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  width: 100%;
  box-sizing: border-box;
  padding-top: 1rem;
}
aside h2 {
  display: none;
}
aside button {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  box-sizing: border-box;
  width: 80%;
  height: 3.3rem;
  outline: none;
  border-radius: 100px 100px 100px 100px;
  padding-left: 1.2rem;
  margin-bottom: 3%;
}
aside button i {
  background: linear-gradient(to right, yellow, red, green, blue);
  font-size: 2rem;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-right: 10%;
}
aside button span {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.0107142857em;
}
.btn {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.btn:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.24);
}
aside ul {
  margin: 0;
  padding: 0.3rem 0;
  list-style: none;
  text-align: left;
  width: 100%;
  border-bottom: 0.5px solid #61616186;
}
aside ul li {
  padding-left: 1.2rem;
  border-radius: 0px 100px 100px 0px;
  height: 2.6rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  line-height: 1.25rem;
  color: #202124;
  cursor: pointer;
}
aside ul li:hover {
  color: #2962ff;
  background: #5880ec23;
}
aside ul li:hover i {
  color: #2962ff;
}
aside ul li i {
  margin-right: 10%;
  color: #5f6368;
}
@media screen and (max-width: 768px) {
  aside nav {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    width: 100%;
    box-sizing: border-box;
    padding-top: 1rem;
  }
  aside.active {
    width: 70%;
    top: 0;
    z-index: 1;
    position: absolute;
    height: 99vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.24);
  }
  aside .aside-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
  aside .aside-bar i {
    margin-right: 10%;
    color: #202124;
  }
  aside h2 {
    display: block;
    width: 80%;
    height: 2.5rem;
    outline: none;
    text-align: left;
    border-radius: 100px 100px 100px 100px;
    padding-left: 1.2rem;
    margin-bottom: 0%;
    margin-right: 10%;
    font-size: 1.3rem;
  }
  aside h2 span {
    background: linear-gradient(to right, yellow, red, green, blue);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  aside button {
    display: none;
  }
  aside button span {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.0107142857em;
  }
  .btn {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .btn:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.24);
  }
  aside ul {
    margin: 0;
    padding: 0.3rem 0;
    list-style: none;
    text-align: left;
    width: 100%;
    border-bottom: 0.5px solid #61616186;
  }
  aside ul li {
    padding-left: 1.2rem;
    border-radius: 0px 100px 100px 0px;
    height: 2.6rem;
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    line-height: 1.25rem;
    color: #202124;
    cursor: pointer;
  }
  aside ul li:hover {
    color: #2962ff;
    background: #5880ec23;
  }
  aside ul li:hover i {
    color: #2962ff;
  }
  aside ul li i {
    margin-right: 10%;
    color: #5f6368;
  }
}
</style>
