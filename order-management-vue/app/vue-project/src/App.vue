<script>
export default {
	name: 'App',
	data: function () {
		return {
		}
	}
}
</script>

<script setup>
//  Library Imports
import HeaderPanel from './components/HeaderPanel.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
import SectionNavigation from './components/SectionNavigation.vue';
import CustomModal from "./components/CustomModal.vue";
import PartnersTable from './components/PartnersTable.vue';
import CustomersTable from './components/CustomersTable.vue';
import { ref } from "vue";
import axios from "axios";

// State references
const customerModalActive = ref(null);
const recipientModalActive = ref(null);
const forwarderModalActive = ref(null);
const selectedCustomer = ref(null);
const selectedRecipientOfGoods = ref(null);
const selectedForwarder = ref(null);

// Main data sources
const consigneesOfGoods = ref([
	{
		code: "Em",
		name: ""
	}
]);
const customers = ref([
	{
		code: "Em",
		name: ""
	}
]);
const forwarders = ref([
	{
		code: "Em",
		name: ""
	}
]);


// Custom functions
const toggleCustomersModal = () => {
	customerModalActive.value = !customerModalActive.value;
}
const toggleRecipientsModal = () => {
	recipientModalActive.value = !recipientModalActive.value;
}
const toggleForwardersModal = () => {
	forwarderModalActive.value = !forwarderModalActive.value;
}
const selectCustomer = (customerName) => {
	selectedCustomer.value = customerName;
	toggleCustomersModal();
}
const selectPartner = (partnerName, partnerType) => {
	if(partnerType === "Recipients"){
		selectedRecipientOfGoods.value = partnerName;
		toggleRecipientsModal();
	}
	if(partnerType === "Forwarders") {
		selectedForwarder.value = partnerName;
		toggleForwardersModal();
	};
}

// Data getter functions
const getCustomers = async () => {
	const result = await axios.get(`http://localhost:4004/order/RecipientTypes?$expand=country`);
    customers.value = result.data.value;
};
const getConsignees = async () => {
	const result = await axios.get(`http://localhost:4004/consignment/ConsigneesOfGoods?$expand=country`);
    consigneesOfGoods.value = result.data.value;
};
const getForwarders = async () => {
	const result = await axios.get(`http://localhost:4004/consignment/Forwarders?$expand=country`);
    forwarders.value = result.data.value;
};

getCustomers();
getConsignees();
getForwarders();
</script>

<template>
	<div>
		<header>
			<div class="wrapper">
				<HeaderPanel msg="Order Management" />
			</div>
		</header>
		<main>
			<div class="mbt-20">
				<SectionNavigation />
			</div>
			<div class="twoColumn">
				<LeftPanel 
					class="w-50 mr-15" 
					@toggle-customers-modal="toggleCustomersModal" 
					:orderTypes="orderTypes"
					:selectedCustomer="selectedCustomer" />
				<RightPanel 
					class="w-50 ml-15" 
					@toggle-recipients-modal="toggleRecipientsModal"
					@toggle-forwarders-modal="toggleForwardersModal"
					:selectedRecipientOfGoods="selectedRecipientOfGoods"
					:selectedForwarder="selectedForwarder" />
			</div>
			<CustomModal :modalActive="customerModalActive" @close-modal="toggleCustomersModal">
				<CustomersTable :customers="customers" :userType="'Customers'" @select-customer="selectCustomer"></CustomersTable>
			</CustomModal>
			<CustomModal :modalActive="recipientModalActive" @close-modal="toggleRecipientsModal">
				<PartnersTable :partners="consigneesOfGoods" :userType="'Recipients'" @select-partner="selectPartner"></PartnersTable>
			</CustomModal>
			<CustomModal :modalActive="forwarderModalActive" @close-modal="toggleForwardersModal">
				<PartnersTable :partners="forwarders" :userType="'Forwarders'" @select-partner="selectPartner"></PartnersTable>
			</CustomModal>
		</main>
	</div>
</template>

<style scoped>
header {
	line-height: 1.5;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

.mbt-20 {
	margin-top: 20px;
	margin-bottom: 20px;
}

.ml-15 {
	margin-left: 15px;
}

.mr-15 {
	margin-right: 15px;
}

.tempImg {
	width: 70%;
	height: 70%;
}

.twoColumn {
	display: flex;
	justify-content: space-between;
}

.w-50 {
	width: 50%;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>
