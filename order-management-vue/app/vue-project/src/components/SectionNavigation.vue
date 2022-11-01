<script setup>
</script>

<template>
    <div class="hFlex">
        <button class="navItem green">{{ $t('nav.header') }}</button>
        <button class="navItem">{{ $t('nav.locations') }}</button>
        <button class="navItem">{{ $t('nav.promoVistex') }}</button>
        <button class="navItem">{{ $t('nav.testedPricing') }}</button>
        <button class="navItem">{{ $t('nav.partner') }}</button>
        <button class="navItem">{{ $t('nav.note') }}</button>
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