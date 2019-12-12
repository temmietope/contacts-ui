<template>
  <div class="contacts-wrapper">
    <table>
      <thead>
        <tr>
          <th width="40%">Name</th>
          <th width="30%">Email</th>
          <th width="20%">Phone Number</th>
          <th class="more" width="10%">
            <i class="fas fa-ellipsis-v" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width="40%">Richard Hendricks</td>
          <td width="30%">richard@piedpiper.com</td>
          <td width="20%">08000000000</td>
          <td width="10%">
            <i class="fas fa-ellipsis-v" />
          </td>
        </tr>
        <tr>
          <td width="40%">Bertram Gilfoyle</td>
          <td width="30%">gilfoyle@piedpiper.com</td>
          <td width="20%">08000000000</td>
          <td width="10%">
            <i class="fas fa-ellipsis-v" />
          </td>
        </tr>
        <tr>
          <td width="40%">Dinesh Chugtai</td>
          <td width="30%">dinesh@piedpiper.com</td>
          <td width="20%">08000000000</td>
          <td width="10%">
            <i class="fas fa-ellipsis-v" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  components: {
    // Home
  }
};
</script>

<style>
.contacts-wrapper {
  width: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.contacts-wrapper table {
  width: 95%;
  /* table-layout: fixed; */
}
.contacts-wrapper table,
td,
th {
  border-collapse: collapse;
}

.contacts-wrapper th,
td {
  /* padding: 10px; */
  border: solid 1px;
  text-align: left;
}
.contacts-wrapper thead .more {
  text-align: right;
}
</style>
