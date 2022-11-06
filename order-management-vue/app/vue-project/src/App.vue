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

// For localized backend
const langLocale = ref('it');
const headers = {
	'Accept-Language': 'en'
};

// State references
const customerModalActive = ref(null);
const customerNoData = ref(null);
const customersearched = ref(null);
const selectedCustomer = ref(null);

const recipientModalActive = ref(null);
const recipientNoData = ref(null);
const recipientsearched = ref(null);
const selectedRecipientOfGoods = ref(null);

const forwarderModalActive = ref(null);
const forwarderNoData = ref(null);
const forwardersearched = ref(null);
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

// Change language locale for the entire application
const setNewLocale = (newLocale) => {
	langLocale.value = newLocale;

	getCustomers();
	getConsignees();
	getForwarders();
}

// Custom functions
const toggleCustomersModal = () => {
	customerModalActive.value = !customerModalActive.value;
	if(customerModalActive.value){
		getCustomers();
	}
}
const toggleRecipientsModal = () => {
	recipientModalActive.value = !recipientModalActive.value;
	if(recipientModalActive.value){
		getConsignees();
	}
}
const toggleForwardersModal = () => {
	forwarderModalActive.value = !forwarderModalActive.value;
	if(forwarderModalActive.value){
		getForwarders();
	}
}

// Setting up Table Select Dialog selections
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
	}
}

// Data getter functions
const getCustomers = async (searchTerm) => {
	let result = null;
	headers['Accept-Language'] = langLocale.value;

	if(typeof searchTerm !== "undefined") {
		customersearched.value = true;
		result = await axios.get(`http://localhost:4004/order/RecipientTypes?$expand=country&$search=${searchTerm}`, {headers});
	} else {
		customersearched.value = false;
		result = await axios.get(`http://localhost:4004/order/RecipientTypes?$expand=country`, {headers});
	}
	
	if(result.data.value.length === 0){
		customerNoData.value = true;
	} else {
		customerNoData.value = false;
		customers.value = result.data.value;
	}
};
const getConsignees = async (searchTerm) => {
	let result = null;
	headers['Accept-Language'] = langLocale.value;

	if(typeof searchTerm !== "undefined") {
		recipientsearched.value = true;
		result = await axios.get(`http://localhost:4004/consignment/ConsigneesOfGoods?$expand=country&$search=${searchTerm}`, {headers});
	} else {
		recipientsearched.value = false;
		result = await axios.get(`http://localhost:4004/consignment/ConsigneesOfGoods?$expand=country`, {headers});
	}
	
	if(result.data.value.length === 0){
		recipientNoData.value = true;
	} else {
		recipientNoData.value = false;
		consigneesOfGoods.value = result.data.value;
	}
};
const getForwarders = async (searchTerm) => {
	let result = null;
	headers['Accept-Language'] = langLocale.value;

	if(typeof searchTerm !== "undefined") {
		forwardersearched.value = true;
		result = await axios.get(`http://localhost:4004/consignment/Forwarders?$expand=country&$search=${searchTerm}`, {headers});
	} else {
		forwardersearched.value = false;
		result = await axios.get(`http://localhost:4004/consignment/Forwarders?$expand=country`, {headers});
	}
	
	if(result.data.value.length === 0){
		forwarderNoData.value = true;
	} else {
		forwarderNoData.value = false;
		forwarders.value = result.data.value;
	}
};

getCustomers();
getConsignees();
getForwarders();
</script>

<template>
	<div>
		<header>
			<div class="wrapper w-100">
				<HeaderPanel 
					:msg="$t('header.orderManagement')"
					@lng-changed="setNewLocale"/>
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
					:selectedCustomer="selectedCustomer"
					:locale="langLocale" />
				<RightPanel 
					class="w-50 ml-15" 
					@toggle-recipients-modal="toggleRecipientsModal"
					@toggle-forwarders-modal="toggleForwardersModal"
					:selectedRecipientOfGoods="selectedRecipientOfGoods"
					:selectedForwarder="selectedForwarder"
					:locale="langLocale" />
			</div>
			<CustomModal :modalActive="customerModalActive" @close-modal="toggleCustomersModal">
				<CustomersTable 
					:customers="customers" 
					:userType="'Customers'"
					:noData="customerNoData" 
					:searched="customersearched"
					@select-customer="selectCustomer"
					@search-customer="getCustomers"
					@cancel-search="getCustomers"
				></CustomersTable>
			</CustomModal>
			<CustomModal :modalActive="recipientModalActive" @close-modal="toggleRecipientsModal">
				<PartnersTable 
					:partners="consigneesOfGoods" 
					:userType="'Recipients'"
					:noData="recipientNoData" 
					:searched="recipientsearched"
					@select-partner="selectPartner"
					@search-partner="getConsignees"
					@cancel-search="getConsignees"
				></PartnersTable>
			</CustomModal>
			<CustomModal :modalActive="forwarderModalActive" @close-modal="toggleForwardersModal">
				<PartnersTable 
					:partners="forwarders" 
					:userType="'Forwarders'" 
					:noData="forwarderNoData" 
					:searched="forwardersearched"
					@select-partner="selectPartner"
					@search-partner="getForwarders"
					@cancel-search="getForwarders"
				></PartnersTable>
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
