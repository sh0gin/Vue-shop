<template>
  <div>
    <app-header></app-header>
    <!-- <app-register></app-register> -->
    <!-- <app-login></app-login> -->
    <router-view></router-view>
  </div>
</template>

<script>

import AppLogin from './AppLogin.vue';
import AppRegister from './AppRegister.vue'
import AppHeader from './AppHeader.vue'
export default {
  data() {

  },
  components: {AppRegister, AppLogin, AppHeader}
}
</script>

<style scoped></style>
