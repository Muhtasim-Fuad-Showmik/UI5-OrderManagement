<script setup>
defineEmits(['lng-changed']);
defineProps({
  msg: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="d-flex justify-content-sb w-100">
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
      <h3>
        {{ $t('header.orderManagementSub') }}
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      </h3>
    </div>
    <div class="langSelector">
      <label for="locale">Language</label>
      <select id="langSelect" v-model="$i18n.locale" @change="$emit('lng-changed', $i18n.locale)">
        <option>en</option>
        <option>it</option>
        <option>de</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
