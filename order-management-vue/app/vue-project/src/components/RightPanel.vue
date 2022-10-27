<script>
export default {
    name: 'RightPanel',
    props: ['selectedRecipientOfGoods', 'selectedForwarder'],
    data: function() {
        return {
            recipientCity: '',
            forwarderCity: '',
            recipientCountry: '',
            forwarderCountry: ''
        }
    }
}
</script>

<script setup>
    // Lirary imports
    import { ref } from "vue";
    import axios from "axios";

    // State references
    const cities = ref([
        {
            "key": "Em",
            "text": "",
            "country": ""
        }
    ]);
    const countries = ref([
        {
            "key": "Em",
            "text": ""
        }
    ]);

    defineEmits(["toggle-recipients-modal", "toggle-forwarders-modal"]);

    const getCities = async () => {
        const result = await axios.get(`http://localhost:4004/consignment/Cities`);
        cities.value = result.data.value;
    }

    const getCountries = async () => {
        const result = await axios.get(`http://localhost:4004/consignment/Countries`);
        countries.value = result.data.value;
    }

    getCities();
    getCountries();
</script>

<template class="gridLayout">
    <div class="dBlock">
        <!-- Recipient of Goods -->
        <div class="row">
            <div class="inputDiv withButton">
                <input class="inputItem" type="text" placeholder="Recipient of Goods" :value="selectedRecipientOfGoods">
            </div>

            <div class="inputDiv inpButton">
                <i class="fa-regular fa-window-restore fa-lg modalIcon" @click="$emit('toggle-recipients-modal')"></i>
            </div>

            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Name of the consignee of goods">
            </div>
        </div>

        <div class="row">
            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Via/Marketplace">
            </div>
        </div>

        <div class="row">
            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Postal Code">
            </div>

            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="City">
            </div>
        </div>

        <div class="row">
            <div class="inputDiv">
                <select class="inputItem" v-model="recipientCity">
                    <option disabled selected hidden value="">Province</option>
                    <option v-for="city in cities" :key="city.code" :value="city.code">{{city.title}}</option>
                </select>
            </div>

            <div class="inputDiv">
                <select class="inputItem" v-model="recipientCountry">
                    <option disabled selected hidden value="">Country</option>
                    <option v-for="country in countries" :key="country.code" :value="country.code">{{country.name}}</option>
                </select>
            </div>
        </div>

        <br>

        <!-- Forwarder -->
        <div class="row">
            <div class="inputDiv withButton">
                <input class="inputItem" type="text" placeholder="Forwarder" :value="selectedForwarder">
            </div>

            <div class="inputDiv inpButton">
                <i class="fa-regular fa-window-restore fa-lg modalIcon" @click="$emit('toggle-forwarders-modal')"></i>
            </div>

            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Forwarder Name">
            </div>
        </div>

        <div class="row">
            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Via/Marketplace">
            </div>
        </div>

        <div class="row">
            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Postal Code">
            </div>

            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="City">
            </div>
        </div>

        <div class="row">
            <div class="inputDiv">
                <select class="inputItem" v-model="forwarderCity">
                    <option disabled selected hidden value="">Province</option>
                    <option v-for="city in cities" :key="city.code" :value="city.code">{{city.title}}</option>
                </select>
            </div>

            <div class="inputDiv">
                <select class="inputItem" v-model="forwarderCountry">
                    <option disabled selected hidden value="">Country</option>
                    <option v-for="country in countries" :key="country.code" :value="country.code">{{country.name}}</option>
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