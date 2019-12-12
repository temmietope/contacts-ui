<template>
  <table>
    <thead>
      <tr>
        <th class="name">Name</th>
        <th class="email">Email</th>
        <th class="phone">Phone Number</th>
        <th class="more">
          <i class="fas fa-ellipsis-v" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="contact in contacts" :key="contact.id">
        <td class="name">
          <div class="_name">
            <div class="circle" :style="{backgroundColor: getRandomColor}">
              <span class="initials">{{getInitials(contact.name)}}</span>
            </div>
            {{contact.name.title}} {{contact.name.first}} {{contact.name.last}}
          </div>
        </td>
        <td class="email">gilfoyle@piedpiper.com</td>
        <td class="phone">08000000000</td>
        <td class="more">
          <div class="_more">
            <i class="far fa-star" />
            <i class="fas fa-pencil-alt" />
            <i class="fas fa-ellipsis-v" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import contacts from "./contacts.json";
import colors from "./colors.js";
export default {
  name: "ContactsTable",
  data() {
    return {
      contacts
    };
  },
  computed: {
    getRandomColor() {
      const rand = Math.ceil(Math.random() * colors.length - 1);
      return colors[rand];
    }
  },
  methods: {
    getInitials({ first, last }) {
      return `${first[0]} ${last[0]}`;
    }
  }
};
</script>

<style scoped>
:root {
  --avatar-size: 4rem;
}

.circle {
  /* background-color: #ccc; */
  border-radius: 50%;
  height: 40px;
  width: 40px;
  /* height: var(--avatar-size); */
  text-align: center;
  /* width: var(--avatar-size); */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  font-size: 15px;
  font-weight: bold;
}

.initials {
  font-size: calc(var(--avatar-size) / 2); /* 50% of parent */
  line-height: 1;
  position: relative;
  top: calc(var(--avatar-size) / 4); /* 25% of parent */
  color: white;
}

.contacts-wrapper table {
  width: 98%;
  table-layout: fixed;
}
.contacts-wrapper table .name {
  width: 40%;
}
.contacts-wrapper table ._name {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.contacts-wrapper table .email {
  width: 30%;
}
.contacts-wrapper table .phone {
  width: 20%;
}
.contacts-wrapper table .more {
  width: 10%;
}
.contacts-wrapper table,
td,
th {
  /* border-collapse: collapse; */
  border: none;
}

.contacts-wrapper th,
td {
  text-align: left;
}
.contacts-wrapper thead {
  color: #5f6368;
}
.contacts-wrapper thead .more {
  text-align: right;
}
.contacts-wrapper tbody .more ._more {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.contacts-wrapper tbody .more ._more i {
  margin-left: 30px;
  color: #5f6368;
}
.contacts-wrapper table tr {
  height: 56px;
}
</style>
