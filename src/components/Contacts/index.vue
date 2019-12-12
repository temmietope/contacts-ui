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
  }
};
</script>

<style scoped>
.contacts-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
