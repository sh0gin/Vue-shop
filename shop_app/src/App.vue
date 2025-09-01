<template>
  <div>
    <header-origin></header-origin>
    <!-- <app-register></app-register> -->
    <!-- <app-login></app-login> -->
    <router-view></router-view>
  </div>
</template>

<script>

import HeaderOrigin from './components/HeaderOrigin.vue';
export default {
  data() {

  },
  components: {HeaderOrigin}
}
</script>

<style scoped></style>
