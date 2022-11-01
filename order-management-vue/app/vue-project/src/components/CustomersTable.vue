<template>
  <div>
    <h2 v-if="userType === 'Customers'">{{ $t('common.selectSomeone', { someone: $tc(`common.customer`, 2) }) }}</h2>

    <!-- Search Bar -->
    <div class="searchPanel">
        <input 
          class="searchInput" 
          type="text" 
          v-model="search" 
          :placeholder="$t('common.searchSomeone', { someone: $tc(`common.customer`, 2) })" 
          @keyup.enter="$emit('search-customer', search)"
          />
        <img 
          class="searchCross" 
          src="../assets/xmark-solid.svg" 
          alt="" 
          v-if="searched"
          @click="cancelSearch" 
        >
    </div>

    <!-- Main Table -->
    <table v-if="!noData" class="classic-table w-892" cellspacing="0">
      <thead>
        <tr>
          <th>{{$t('common.customerCode')}}</th>
          <th>{{$t('common.customerName')}}</th>
          <th>{{$t('common.province')}}</th>
          <th>{{$t('common.city')}}</th>
          <th>{{$t('common.country')}}</th>
          <th>{{$t('common.piva')}}</th>
          <th>{{$t('common.commercialOrganization')}}</th>
          <th>{{$t('common.distributionChannel')}}</th>
          <th>{{$tc('common.weeklyCommodity', 2)}}</th>
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

    <div v-else class="w-892">
        No data found!
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const search = ref(null);

const emit = defineEmits(["select-customer", "search-customer"]);
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

const cancelSearch = () => {
	search.value = "";
	emit('cancel-search');
}
</script>

<style scoped>
.w-892 {
    width: 892px;
}
</style>
