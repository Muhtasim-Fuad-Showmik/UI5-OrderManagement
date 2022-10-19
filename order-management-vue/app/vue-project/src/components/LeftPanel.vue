<script setup>
</script>

<template class="gridLayout">
    <div class="dBlock">
        <div class="row">
            <div class="inputDiv">
                <select class="inputItem" name="orderType">
                    <option value="" disabled selected hidden>Order Types</option>
                    <option value="Cs">Casual</option>
                    <option value="Ex">Express</option>
                </select>
            </div>

            <div class="inputDiv">
                <input class="inputItem" type="text" placeholder="Customer">
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
                    <option value="" disabled selected hidden>Terms of Payment</option>
                    <option value="Cp">Conditions of Payment</option>
                    <option value="Tp">Terms of Payment</option>
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