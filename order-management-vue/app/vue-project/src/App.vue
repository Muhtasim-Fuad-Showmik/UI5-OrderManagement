<script setup>
import HeaderPanel from './components/HeaderPanel.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
import SectionNavigation from './components/SectionNavigation.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderPanel msg="Order Management" />
    </div>
  </header>

  <main>
    <div class="mt-20">
      <SectionNavigation />
    </div>
    <div class="twoColumn">
      <LeftPanel class="w-50" />
      <RightPanel class="w-50" />
    </div>
  </main>

  <img src="./assets/ui5-ui.png" alt="" class="tempImg">
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.mt-20 {
  margin-top: 20px;
}

.tempImg {
  width: 70%;
  height: 70%;
}

.twoColumn {
  display: flex;
  justify-content: space-between;
}

.w-50 {
  width: 50%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
