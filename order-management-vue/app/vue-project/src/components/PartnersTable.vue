<template>
    <div>
        <h2>Select {{ userType }}</h2>
        <table class="classic-table" cellspacing="0">
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
                <tr v-for="partner in partners" :key="partner.code" @click="$emit('select-partner', partner.name, userType)">
                    <td>{{ partner.code }}</td>
                    <td>{{ partner.name }}</td>
                    <td>{{ partner.province }}</td>
                    <td>{{ partner.city }}</td>
                    <td>{{ partner.country }}</td>
                    <td>{{ partner.address }}</td>
                    <td>{{ partner.postalCode }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    defineEmits(['select-partner']);
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
					country: "Country",
					address: "Address",
					postalCode: "00000"
                }
            ]
        }
    });
</script>

<style scoped>
</style>