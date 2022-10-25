<script>
export default {
	name: 'App',
	data: function () {
		return {
			customers: [
				{
					code: "1410866423",
					name: "Johny Depp",
					province: "TN",
					city: " Trento",
					country: "Italy",
					piva: "0397553088",
					commercialOrg: "Z001 - Derga",
					distributionChannel: "Z1 - channel",
					weeklyCommodity: "ZZ - Division"
				},
				{
					code: "1410866424",
					name: "Brad Pitt",
					province: "VN",
					city: " Venice",
					country: "Italy",
					piva: "0397553089",
					commercialOrg: "Z002 - Derga",
					distributionChannel: "Z2 - channel",
					weeklyCommodity: "ZX - Division"
				},
				{
					code: "1410866425",
					name: "Trevor Noah",
					province: "BN",
					city: " Berlin",
					country: "Germany",
					piva: "0397553090",
					commercialOrg: "Z001 - Derga",
					distributionChannel: "Z1 - channel",
					weeklyCommodity: "ZX - Division"
				},
				{
					code: "1410866426",
					name: "Edris Alba",
					province: "HG",
					city: " Hamburg",
					country: "Germany",
					piva: "0397553091",
					commercialOrg: "Z002 - Derga",
					distributionChannel: "Z3 - channel",
					weeklyCommodity: "ZZ - Division"
				}
			],
			consigneesOfGoods: [
				{
					code: "1410866423",
					name: "Tom Holland",
					province: "TN",
					city: "Trento",
					country: "Italy",
					address: "Via Frischin 3",
					postalCode: "39100"
				},
				{
					code: "1410866424",
					name: "Drew Barrymoore",
					province: "NY",
					city: "New York",
					country: "USA",
					address: "11th, Broadway Street",
					postalCode: "32145"
				},
				{
					code: "1410866425",
					name: "Elisha Cuthbert",
					province: "LN",
					city: "London",
					country: "Great Britain",
					address: "21st Manchester Avenue",
					postalCode: "53123"
				},
				{
					code: "1410866426",
					name: "Aston Kutcher",
					province: "SN",
					city: "Sydney",
					country: "Australia",
					address: "17/2, Candace Road",
					postalCode: "71382"
				}
        	],
			forwarders: [
				{
					code: "1410866623",
					name: "Rosamund Pike",
					province: "TN",
					city: "Trento",
					country: "Italy",
					address: "Via Frischin 3",
					postalCode: "39101"
				},
				{
					code: "1410866624",
					name: "Jason Stratham",
					province: "BN",
					city: "Berlin",
					country: "Germany",
					address: "Mohrenstrasse 37",
					postalCode: "10117"
				},
				{
					code: "1410866625",
					name: "Edward Snowden",
					province: "MW",
					city: "Moscow",
					country: "Russia",
					address: "Prospekt Tverskaya 9",
					postalCode: "10309"
				},
				{
					code: "1410866626",
					name: "Chris Evans",
					province: "NY",
					city: "New York",
					country: "USA",
					address: "13th Yorkshire Street",
					postalCode: "39420"
				}
			]
		}
	}
}
</script>

<script setup>
import HeaderPanel from './components/HeaderPanel.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
import SectionNavigation from './components/SectionNavigation.vue';
import CustomModal from "./components/CustomModal.vue";
import PartnersTable from './components/PartnersTable.vue';
import CustomersTable from './components/CustomersTable.vue';
import { ref } from "vue";
const customerModalActive = ref(null);
const recipientModalActive = ref(null);
const forwarderModalActive = ref(null);
const selectedCustomer = ref(null);
const selectedRecipientOfGoods = ref(null);
const selectedForwarder = ref(null);
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
