
<template>
  <!-- <app-register></app-register> -->
  <!-- <app-login></app-login> -->
  <router-view></router-view>
</template>

<script>
import AppLogin from './AppLogin.vue';
import AppRegister from './AppRegister.vue'
export default {
  data() {

  },
  components: {AppRegister, AppLogin}
}
</script>


<style scoped>

</style>
