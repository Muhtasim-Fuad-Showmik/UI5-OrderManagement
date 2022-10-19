<script setup>
</script>

<template class="gridLayout">
    <div class="dBlock">
        <!-- Recipient of Goods -->
        <div class="row">
            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Recipient of Goods">
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
                    <option value="Br">Berlin</option>
                    <option value="Ro">Rome</option>
                </select>
            </div>

            <div class="inputDiv">
                <select class="inputItem" name="recipientCountry">
                    <option value="De">Germany</option>
                    <option value="It">Italy</option>
                </select>
            </div>
        </div>

        <br>

        <!-- Forwarder -->
        <div class="row">
            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Forwarder">
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
                    <option value="Br">Berlin</option>
                    <option value="Ro">Rome</option>
                </select>
            </div>

            <div class="inputDiv">
                <select class="inputItem" name="forwarderCountry">
                    <option value="De">Germany</option>
                    <option value="It">Italy</option>
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
    
.inputItem {
    height: 30px;
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
}

.row {
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
}
</style>