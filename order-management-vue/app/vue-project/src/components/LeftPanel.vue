<script>
export default {
    name: 'LeftPanel',
    props: ['selectedCustomer', 'noData', 'searching'],
    data: function() {
        return {
            orderType: '',
            paymentPolicy: ''
        }
    }
}
</script>

<script setup>
    // Library imports
    import { ref } from "vue";
    import axios from "axios";

    // For localized backend
    const headers = {
        'Accept-Language': 'it'
    };

    // State references
    const orderTypes = ref([
        {
            code: "Em",
            title: "Empty",
        }
    ]);
    const paymentPolicies = ref([
        {
            code: "Em",
            title: "Empty"
        }
    ]);

    defineEmits(["toggle-customers-modal"]);

    const getOrderTypes = async () => {
        const result = await axios.get(`http://localhost:4004/order/OrderTypes`, {headers});
        orderTypes.value = result.data.value;
    };

    const getPaymentPolicies = async () => {
        const result = await axios.get(`http://localhost:4004/order/PaymentPolicies`, {headers});
        paymentPolicies.value = result.data.value;
    }

    getOrderTypes();
    getPaymentPolicies();
</script>

<template class="gridLayout">
    <div class="dBlock">
        <div class="row">
            <div class="inputDiv">
                <select class="inputItem" v-model="orderType">
                    <option disabled selected hidden value="">{{ $t('common.orderType') }}</option>
                    <option v-for="orderType in orderTypes" :key="orderType.code" :value="orderType.code">{{ orderType.title }}</option>
                </select>
            </div>

            <div class="inputDiv withButton">
                <input class="inputItem" type="text" :placeholder="$t('common.customer')" :value="selectedCustomer">
            </div>

            <div class="inputDiv inpButton">
                <i class="fa-regular fa-window-restore fa-lg modalIcon" @click="$emit('toggle-customers-modal')"></i>
            </div>

            <div class="inputDiv">
                <input class="inputItem" type="date">
            </div>
        </div>

        <div class="row">
            <div class="inputDiv">
                <input class="inputItem" type="text" :placeholder="$t('common.commercialOrg')">
            </div>

            <div class="inputDiv">
                <input class="inputItem" type="text" :placeholder="$t('common.distributionChannel')">
            </div>

            <div class="inputDiv">
                <input class="inputItem" type="text" :placeholder="$t('common.weeklyCommodity')">
            </div>
        </div>

        <div class="row">
            <div class="inputDiv">
                <input class="inputItem" type="text" :placeholder="$t('common.refOrdCustomer')">
            </div>

            <div class="inputDiv">
                <select class="inputItem" v-model="paymentPolicy">
                    <option disabled selected hidden value="">{{$t('common.paymentPolicy')}}</option>
                    <option v-for="paymentPolicy in paymentPolicies" :key="paymentPolicy.code" :value="paymentPolicy.code">{{ paymentPolicy.title }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<style>
.dBlock {
    display: block;
}

.gridLayout {
    display: flex;
    flex-direction: column;
}

.inputDiv {
    flex: 1;
    padding: 0px 8px;
}

.inputDiv.withButton {
    flex: 0.9;
    padding: 0px 0px 0px 8px;
}

.inputDiv.inpButton {
    flex: 0.05;
    display: flex;
    justify-content: start;
    align-items: center;
}
    
.inputItem {
    height: 32px;
    width: 100%;
    padding: 0 10px;
    border-radius: 5px;
}

.modalIcon {
    color: white;
    transition-duration: 150ms;
    cursor: pointer;
}

.modalIcon:hover {
    --tw-text-opacity: 1;
    color: hsla(160, 100%, 37%, 1);
}

.row {
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
}
</style>