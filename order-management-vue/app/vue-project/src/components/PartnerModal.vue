<template>
    <div class="outer">
        <div class="inner">
            <slot />
            <button class="btn-primary">Cancel</button>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        modalActive: {
            type: Boolean,
            default: false
        }
    });
</script>

<style lang="scss" scoped>
    .outer {
        position: absolute;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: center;
        padding-left: 2rem;
        padding-right: 2rem;
        width: 100%;
        height: 100vh;
        --tw-bg-opacity: 0.3;
        background-color: rgb(0 0 0 / var(--tw-bg-opacity));
    }

    .inner {
        align-self: flex-start;
        max-width: 768px;
        margin-top: 8rem;
        padding: 1rem;
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }

    .btn-primary {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
        margin-top: 2rem;
        padding-top: 0.5rem 1.5rem;
        --tw-bg-opacity: 1;
        background-color: hsla(160, 100%, 37%, 0.2);
    }
</style>