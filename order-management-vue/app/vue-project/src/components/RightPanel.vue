<script>
export default {
    name: 'RightPanel',
    data: function() {
        return {
            Cities: [
            {
                "key": "ItRo",
                "text": "Rome",
                "country": "Italy"
            },
            {
                "key": "ItVn",
                "text": "Venice",
                "country": "Italy"
            },
            {
                "key": "ItNp",
                "text": "Naples",
                "country": "Italy"
            },
            {
                "key": "DeBn",
                "text": "Berlin",
                "country": "Germany"
            },
            {
                "key": "DeHg",
                "text": "Hamburg",
                "country": "Germany"
            },
            {
                "key": "DeMc",
                "text": "Munich",
                "country": "Germany"
            }
        ],
        Countries: [
            {
                "key": "It",
                "text": "Italy"
            },
            {
                "key": "De",
                "text": "Germany"
            }
        ],
        ConsigneesOfGoods: [
            {
                "PartnerCode": "1410866423",
                "PartnerName": "Tom Holland",
                "Province": "TN",
                "City": "Trento",
                "Country": "Italy",
                "Address": "Via Frischin 3",
                "PostalCode": "39100"
            },
            {
                "PartnerCode": "1410866424",
                "PartnerName": "Drew Barrymoore",
                "Province": "NY",
                "City": "New York",
                "Country": "USA",
                "Address": "11th, Broadway Street",
                "PostalCode": "32145"
            },
            {
                "PartnerCode": "1410866425",
                "PartnerName": "Elisha Cuthbert",
                "Province": "LN",
                "City": "London",
                "Country": "Great Britain",
                "Address": "21st Manchester Avenue",
                "PostalCode": "53123"
            },
            {
                "PartnerCode": "1410866426",
                "PartnerName": "Aston Kutcher",
                "Province": "SN",
                "City": "Sydney",
                "Country": "Australia",
                "Address": "17/2, Candace Road",
                "PostalCode": "71382"
            }
        ],
        Forwarder: [
            {
                "PartnerCode": "1410866623",
                "PartnerName": "Rosamund Pike",
                "Province": "TN",
                "City": "Trento",
                "Country": "Italy",
                "Address": "Via Frischin 3",
                "PostalCode": "39101"
            },
            {
                "PartnerCode": "1410866624",
                "PartnerName": "Jason Stratham",
                "Province": "BN",
                "City": "Berlin",
                "Country": "Germany",
                "Address": "Mohrenstrasse 37",
                "PostalCode": "10117"
            },
            {
                "PartnerCode": "1410866625",
                "PartnerName": "Edward Snowden",
                "Province": "MW",
                "City": "Moscow",
                "Country": "Russia",
                "Address": "Prospekt Tverskaya 9",
                "PostalCode": "10309"
            },
            {
                "PartnerCode": "1410866626",
                "PartnerName": "Chris Evans",
                "Province": "NY",
                "City": "New York",
                "Country": "USA",
                "Address": "13th Yorkshire Street",
                "PostalCode": "39420"
            }
        ]
        }
    }
}
</script>

<script setup>
</script>

<template class="gridLayout">
    <div class="dBlock">
        <!-- Recipient of Goods -->
        <div class="row">
            <div class="inputDiv withButton">
                <input class="inputItem" type="text" placeholder="Recipient of Goods">
            </div>

            <div class="inputDiv inpButton">
                <i class="fa-regular fa-window-restore fa-lg modalIcon"></i>
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
                <select class="inputItem" name="recipientCity">
                    <option v-for="city in Cities" :key="city.key" :value="city.key">{{city.text}}</option>
                </select>
            </div>

            <div class="inputDiv">
                <select class="inputItem" name="recipientCountry">
                    <option v-for="country in Countries" :key="country.key" :value="country.key">{{country.text}}</option>
                </select>
            </div>
        </div>

        <br>

        <!-- Forwarder -->
        <div class="row">
            <div class="inputDiv withButton">
                <input class="inputItem" type="text" placeholder="Forwarder">
            </div>

            <div class="inputDiv inpButton">
                <i class="fa-regular fa-window-restore fa-lg modalIcon"></i>
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
                <select class="inputItem" name="forwarderCity">
                    <option v-for="city in Cities" :key="city.key" :value="city.key">{{city.text}}</option>
                </select>
            </div>

            <div class="inputDiv">
                <select class="inputItem" name="forwarderCountry">
                    <option v-for="country in Countries" :key="country.key" :value="country.key">{{country.text}}</option>
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
    height: 30px;
    width: 100%;
    padding: 1rem;
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