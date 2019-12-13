<template>
  <div class="contacts-wrapper">
    <ContactsTable />
  </div>
</template>

<script>
import ContactsTable from "./ContactsTable";
export default {
  name: "Contacts",
  components: {
    ContactsTable
  },
  props: {
    activeNav: {
      type: Boolean,
      active: true
    }
  },
  methods: {
    closeSideBar() {
      this.active = false;
    }
  }
};
</script>

<style scoped>
.contacts-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-grow: 2;
}
</style>
