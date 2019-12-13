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
    <hr />
    <div class="desc">
      <span>CONTACTS ({{contacts.length}})</span>
    </div>

    <tbody>
      <tr v-for="contact in contacts" :key="contact.id" class="row-body">
        <td class="name">
          <div class="_name">
            <i class="fas fa-grip-vertical sideicon" />
            <div class="circle" :style="{backgroundColor: getRandomColor}">
              <span class="initials">{{getInitials(contact.name)}}</span>
            </div>
            {{contact.name.title}} {{contact.name.first}} {{contact.name.last}}
          </div>
        </td>
        <td class="email">{{contact.email}}</td>
        <td class="phone">{{contact.phone}}</td>
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
  height: 2.5rem;
  width: 2.5rem;
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
  position: relative;
}
.contacts-wrapper table .name {
  width: 40%;
  box-sizing: border-box;
}
.contacts-wrapper table ._name {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
}
.contacts-wrapper table ._name .sideicon {
  padding-right: 2%;
  display: none;
  color: #5f6368;
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
  background: white;
  width: 100%;
  /* z-index: 1;
  position: fixed;
  top: 7vh; */
}
hr {
  color: #61616186;
  margin: 0;
}
.contacts-wrapper thead .more {
  text-align: right;
}
.contacts-wrapper tbody .more ._more {
  justify-content: flex-end;
  width: 100%;
  display: none;
}
.contacts-wrapper tbody .more ._more i {
  margin-left: 1.3rem;
  color: #5f6368;
}
.contacts-wrapper table tr {
  height: 3.5rem;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.contacts-wrapper table tr.row-body:hover {
  background: #f1f3f4;
}
.contacts-wrapper table tr.row-body:hover ._more {
  display: flex;
}
.contacts-wrapper table tr.row-body:hover .sideicon {
  display: block;
}
.desc {
  font-size: 0.7rem;
  width: 100%;
  height: 4vh;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #5f6368;
  font-weight: bold;
  padding-left: 0.7rem;
  margin-top: 1rem;
}
</style>
