<template>
  <!-- Header -->
  <header class="main-header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-if="!this.$config.activeToken">
              <router-link class="nav-link" to="/login">Вход</router-link>
            </li>
            <li class="nav-item" v-if="!this.$config.activeToken">
              <router-link class="nav-link" to="/register">Регистрация</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Товары </router-link>
            </li>
            <li class="nav-item" v-if="this.$config.activeToken">
              <router-link class="nav-link" to="/basket">Корзина </router-link>
            </li>
            <li class="nav-item" v-if="this.$config.activeToken">
              <router-link class="nav-link" to="/order">Заказы </router-link>
            </li>
            <li class="nav-item" v-if="this.$config.activeToken">
              <a class="nav-link" @click="logout">Выход</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    async logout() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${this.$config.activeToken}`);
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      await fetch(`${this.$config.apiUrl}api/logout`, requestOptions);
      this.$config.activeToken = null;
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
  beforeCreate() {
    this.$config.activeToken = localStorage.getItem('token');
  },
};
</script>

<style>
.main-header {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.7rem 0;
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
}

.navbar-brand i {
  margin-right: 10px;
  color: var(--primary-color);
  background: none;
}

.nav-link {
  color: var(--text-color);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-link:hover {
  color: var(--primary-color);
  background-color: rgba(67, 206, 162, 0.1);
}

.nav-link.active {
  color: var(--primary-color);
  background-color: rgba(67, 206, 162, 0.15);
}

.btn-header {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-header:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
</style>
