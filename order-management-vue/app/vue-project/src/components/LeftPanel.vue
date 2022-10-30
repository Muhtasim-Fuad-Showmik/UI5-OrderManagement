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
        const result = await axios.get(`http://localhost:4004/order/OrderTypes`);
        orderTypes.value = result.data.value;
    };

    const getPaymentPolicies = async () => {
        const result = await axios.get(`http://localhost:4004/order/PaymentPolicies`);
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
                    <option disabled selected hidden value="">Order Type</option>
                    <option v-for="orderType in orderTypes" :key="orderType.code" :value="orderType.code">{{ orderType.title }}</option>
                </select>
            </div>

            <div class="inputDiv withButton">
                <input class="inputItem" type="text" placeholder="Customer" :value="selectedCustomer">
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
                <input class="inputItem" type="text" placeholder="Commercial Org">
            </div>

            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Distribution Channel">
            </div>

            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Weekly Commodity">
            </div>
        </div>

        <div class="row">
            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Commercial Org">
            </div>

            <div class="inputDiv">
                <select class="inputItem" v-model="paymentPolicy">
                    <option disabled selected hidden value="">Payment Policy</option>
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