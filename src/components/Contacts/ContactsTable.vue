<template>
  <table>
    <thead>
      <tr v-if="checkedBoxes.length">
        <div class="checked_number">
          <span class="checked-icons">
            <i class="fas fa-minus-square"></i>
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-upload"></i>
            <i class="fas fa-tag"></i>
            <i class="fas fa-ellipsis-v" />
          </span>
          <span class="checked-span">{{checkedBoxes.length}} selected</span>
        </div>
      </tr>
      <tr v-else>
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
      <tr
        v-for="({ name, id, phone, email, avatarBg }, i) in contacts"
        :key="id"
        class="row-body"
        @mouseover="hoveredRow = i"
        @mouseleave="hoveredRow = null"
      >
        <td class="name">
          <div class="_name">
            <span v-if="hoveredRow === i || isChecked(id)" class="side_check">
              <i class="fas fa-grip-vertical sideicon" />
              <span class="checkbox">
                <input type="checkbox" :checked="isChecked(id)" @click="toggleCheckbox(id)" />
              </span>
            </span>
            <span v-else>
              <div class="circle" :style="{backgroundColor: avatarBg}">
                <span class="initials">{{getInitials(name)}}</span>
              </div>
            </span>
            <span class="fullname">{{name.title}} {{name.first}} {{name.last}}</span>
          </div>
        </td>
        <td class="email">{{email}}</td>
        <td class="phone">{{phone}}</td>
        <td class="more">
          <span v-if="hoveredRow === i">
            <div class="_more">
              <i class="far fa-star" />
              <i class="fas fa-pencil-alt" />
              <i class="fas fa-ellipsis-v" />
            </div>
          </span>
          <span v-else></span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import contacts from "./contacts.json";
import data from "./contacts.json";
import colors from "./colors.js";
export default {
  name: "ContactsTable",
  data() {
    const contacts = data.map(contact => ({
      ...contact,
      avatarBg: this.getColor()
    }));
    return {
      contacts,
      hoveredRow: null,
      checkedBoxes: []
    };
  },
  methods: {
    getInitials({ first, last }) {
      return `${first[0]} ${last[0]}`;
    },
    getColor() {
      const rand = Math.ceil(Math.random() * colors.length - 1);
      return colors[rand];
    },
    isChecked(id) {
      return this.checkedBoxes.includes(id);
    },

    toggleCheckbox(idx) {
      if (!this.checkedBoxes.includes(idx)) {
        this.checkedBoxes.push(idx);
      } else {
        this.checkedBoxes = this.checkedBoxes.filter(id => id !== idx);
      }
    }
  }
};
</script>

<style scoped>
.circle {
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  font-size: 15px;
  font-weight: bold;
}

.initials {
  line-height: 1;
  position: relative;
  color: white;
}
.checked_number {
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1%;
  box-sizing: border-box;
  color: rgb(26, 114, 232);
}
.checked_number .checked-icons {
  width: 50%;
  text-align: left;
}
.checked_number i {
  margin-right: 4%;
  font-size: 1rem;
}
.checked_number .checked-span {
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
}
.contacts-wrapper table {
  width: 98%;
  table-layout: fixed;
  position: relative;
  font-size: 0.9rem;
}
.contacts-wrapper table .name {
  width: 40%;
  box-sizing: border-box;
}
.contacts-wrapper table ._name {
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
}
.contacts-wrapper table ._name .sideicon {
  margin-right: 10%;
  color: #5f636873;
  align-self: center;
  display: none;
}
.contacts-wrapper table tr.row-body:hover .sideicon {
  display: block;
}
.side_check {
  display: flex;
  margin-left: 0;
}
input[type="checkbox"] {
  transform: scale(1.5);
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
}
.contacts-wrapper tbody tr {
  cursor: pointer;
}
hr {
  color: #61616186;
  margin: 0;
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
.desc {
  font-size: 0.6rem;
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

@media screen and (max-width: 768px) {
  .circle {
    margin-right: 2px;
    font-size: 15px;
    font-weight: bold;
  }
  .checked_number i {
    margin-right: 10%;
    font-size: 1.2rem;
  }
  .checked_number .checked-span {
    font-size: 1.2rem;
  }
  .contacts-wrapper table .name {
    text-align: left;
    width: 100%;
  }
  .contacts-wrapper table ._name {
    display: grid;
    grid-template-columns: 20% 80%;
    align-items: center;
  }
  .side_check {
    display: flex;
    margin-left: 0;
  }
  .contacts-wrapper table .email,
  .phone,
  .more {
    display: none;
  }
}
</style>
