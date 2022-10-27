<template>
    <Transition name="modal-outer">
        <div
        v-show="modalActive"
        class="outer">
            <Transition name="modal-inner">
                <div
                v-if="modalActive"
                class="inner">
                    <slot />
                    <button class="btn-primary" @click="$emit('close-modal')">Cancel</button>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup>
    defineEmits(["close-modal"]);
    defineProps({
        modalActive: {
            type: Boolean,
            default: false
        }
    });
</script>

<style scoped>
    .modal-outer-enter-active,
    .modal-outer-leave-active {
        transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
    }

    .modal-outer-enter-from,
    .modal-outer-leave-to {
        opacity: 0;
    }

    .modal-inner-enter-active {
        transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
    }

    .modal-inner-leave-active {
        transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
    }

    .modal-inner-enter-from {
        opacity: 0;
        transform: scale(0.8);
    }

    .modal-inner-leave-to {
        transform: scale(0.8);
    }

    .outer {
        position: absolute;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: center;
        padding-left: 2rem;
        padding-right: 2rem;
        width: 100%;
        max-height: 100vh;
        --tw-bg-opacity: 0.3;
        background-color: rgb(0 0 0 / var(--tw-bg-opacity));
    }

    .inner {
        align-self: flex-start;
        max-width: 1300px;
        margin-top: 8rem;
        padding: 30px 50px;
        --tw-bg-opacity: 1;
        background-color: rgb(30 30 30 / var(--tw-bg-opacity));
        border-radius: 20px;
        -webkit-box-shadow: -2px -1px 15px 7px rgba(0,0,0,0.5);
        -moz-box-shadow: -3px -2px 30px 14px rgba(0,0,0,0.425);
        box-shadow: -4px -3px 45px 21px rgba(0,0,0,0.35);
    }

    .btn-primary {
        --tw-text-opacity: 1;
        color: hsla(160, 100%, 37%, 1);
        margin-top: 2rem;
        padding: 0.5rem 1.5rem;
        --tw-bg-opacity: 1;
        background-color: black;
        border-radius: 5px;
        transition: all 0.2s ease-in;
    }

    .btn-primary:hover {
        background-color: rgb(10, 10, 10);
        color: white;
        border: 2px solid rgb(10, 10, 10);
    }
</style>