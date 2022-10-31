<template>
    <div>
        <h2>Select {{ userType }}</h2>

        <!-- Search Bar -->
        <div class="searchPanel">
            <input 
                class="searchInput" 
                type="text" 
                v-model="search" 
                :placeholder="`Search ${userType}`" 
                @keyup.enter="$emit('search-partner', search)"
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
                    <th>Partner Code</th>
                    <th>Partner Name</th>
                    <th>Province</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Address</th>
                    <th>Postal Code</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="partner in partners" 
                    :key="partner.code" 
                    @click="$emit('select-partner', partner.name, userType)"
                >
                    <td>{{ partner.code }}</td>
                    <td>{{ partner.name }}</td>
                    <td>{{ partner.province }}</td>
                    <td>{{ partner.city }}</td>
                    <td>{{ partner.country.name }}</td>
                    <td>{{ partner.address }}</td>
                    <td>{{ partner.postalCode }}</td>
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

    const emit = defineEmits(['select-partner', 'search-partner', 'cancel-search']);
    defineProps({
        userType: {
            type: String,
            default: "Partners"
        },
        partners: {
            type: Array,
            default: [
                {
                    code: "0",
					name: "Name",
					province: "PV",
					city: "City",
					country: {
                        name: "Country"
                    },
					address: "Address",
					postalCode: "00000"
                }
            ]
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