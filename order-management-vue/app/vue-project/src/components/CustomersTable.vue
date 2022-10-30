<template>
  <div>
    <h2>Select {{ userType }}</h2>

    <!-- Search Bar -->
    <div class="searchPanel">
        <input class="searchInput" type="text" v-model="search" :placeholder="`Search ${userType}`" />
        <img class="searchCross" src="../assets/xmark-solid.svg" alt="" v-if="searched">
    </div>

    <!-- Main Table -->
    <table v-if="!noData" class="classic-table" cellspacing="0">
      <thead>
        <tr>
          <th>Customer Code</th>
          <th>Customer Name</th>
          <th>Province</th>
          <th>City</th>
          <th>Country</th>
          <th>PIVA</th>
          <th>Commercial Organization</th>
          <th>Distribution Channel</th>
          <th>Weekly Commodities</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="customer in customers"
          :key="customer.code"
          @click="$emit('select-customer', customer.name)"
        >
          <td>{{ customer.code }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.province }}</td>
          <td>{{ customer.city }}</td>
          <td>{{ customer.country.name }}</td>
          <td>{{ customer.piva }}</td>
          <td>{{ customer.commercialOrg }}</td>
          <td>{{ customer.distributionChannel }}</td>
          <td>{{ customer.weeklyCommodity }}</td>
        </tr>
      </tbody>
    </table>

    <div v-else>
        No data found!
    </div>
  </div>
</template>

<script setup>
defineEmits(["select-customer"]);
defineProps({
  userType: {
    type: String,
    default: "Customers",
  },
  customers: {
    type: Array,
    default: [
      {
        code: 0,
        name: "Customer",
        province: "pv",
        city: "City",
        country: {
          name: "Country",
        },
        piva: "PIVA",
        commercialOrg: "Commercial Org",
        distributionChannel: "Distribution Channel",
        weeklyCommodity: "Weekly Commodity",
      },
    ],
  },
  noData: {
    type: Boolean,
    default: false
  },
  searched: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped></style>
