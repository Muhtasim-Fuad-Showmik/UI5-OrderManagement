<script>
export default {
    name: 'LeftPanel',
    data: function() {
        return {
            orderTypes: [
                {
                    code: "Cs",
                    title: "Casual",
                },
                {
                    code: "Ex",
                    title: "Express"
                }
            ],
            paymentPolicies: [
                {
                    code: "Cp",
                    title: "Conditions of Payment"
                },
                {
                    code : "Tp",
                    title : "Terms of Payment"
                }
            ]
        }
    }
}
</script>

<script setup>
    import {ref} from "vue";
    import PartnerModal from "./PartnerModal.vue";

    const modalActive = ref(null);
    const toggleModal = () => {
        modalActive.value = !modalActive.value;
    }
</script>

<template class="gridLayout">
    <div class="dBlock">
        <div class="row">
            <div class="inputDiv">
                <select class="inputItem" name="orderType" v-model="Cs">
                    <option v-for="orderType in orderTypes" :key="orderType.code" :value="orderType.code">{{ orderType.title }}</option>
                </select>
            </div>

            <div class="inputDiv withButton">
                <input class="inputItem" type="text" placeholder="Customer">
            </div>

            <div class="inputDiv inpButton">
                <i class="fa-regular fa-window-restore fa-lg modalIcon" @click="toggleModal"></i>
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
                <select class="inputItem" name="orderType">
                    <option v-for="paymentPolicy in paymentPolicies" :key="paymentPolicy.code" :value="paymentPolicy.code">{{ paymentPolicy.title }}</option>
                </select>
            </div>
        </div>

        <PartnerModal :modalActive="modalActive">
            <h1>Hello world</h1>
        </PartnerModal>
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