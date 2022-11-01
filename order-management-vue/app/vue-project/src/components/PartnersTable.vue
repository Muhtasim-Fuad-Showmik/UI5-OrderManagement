<template>
    <div>
        <h2 v-if="userType === 'Recipients'">{{ $t('common.selectSomeone', { someone: $tc(`common.recipient`, 2) }) }}</h2>
        <h2 v-if="userType === 'Forwarders'">{{ $t('common.selectSomeone', { someone: $tc(`common.forwarder`, 2) }) }}</h2>

        <!-- Search Bar -->
        <div class="searchPanel">
            <input 
                class="searchInput" 
                type="text" 
                v-model="search" 
                :placeholder="
                    userType === 'Recipients' ?
                    $t('common.searchSomeone', { someone: $tc(`common.recipient`, 2) }) :
                    $t('common.searchSomeone', { someone: $tc(`common.forwarder`, 2) })" 
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
                    <th>{{$t('common.partnerCode')}}</th>
                    <th>{{$t('common.partnerName')}}</th>
                    <th>{{$t('common.province')}}</th>
                    <th>{{$t('common.city')}}</th>
                    <th>{{$t('common.country')}}</th>
                    <th>{{$t('common.address')}}</th>
                    <th>{{$t('common.postalCode')}}</th>
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