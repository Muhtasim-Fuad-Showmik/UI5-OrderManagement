<script setup>
</script>

<template>
    <div class="hFlex">
        <button class="navItem green">Header</button>
        <button class="navItem">Locations</button>
        <button class="navItem">Promo Vistex</button>
        <button class="navItem">Tested Pricing</button>
        <button class="navItem">Partner</button>
        <button class="navItem">Note</button>
    </div>
</template>

<style>
    .hFlex {
        display: flex;
    }

    .navItem {
        font-size: 1.2rem;
        margin-right: 40px;
        padding: 10px;
        background: none;
        border: none;
        color: var(--vt-c-text-dark-2);
        cursor: pointer;
        transition: all 0.2s ease-in;
    }

    .navItem.green {
        border-bottom: 2px solid hsla(160, 100%, 37%, 1);
        color: hsla(160, 100%, 37%, 1);
    }

    .navItem:hover {
        color: hsla(160, 100%, 37%, 1);
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 1);
    }
</style>