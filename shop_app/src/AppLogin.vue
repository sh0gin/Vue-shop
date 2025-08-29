<template>
  <div id="app">
    <div class="login-container">
      <div class="login-card card">
        <div class="card-body p-5">
          <div class="text-center mb-4">
            <h2 class="card-title fw-bold">Добро пожаловать</h2>
            <div class="header-divider"></div>
            <p class="text-muted">Введите свои данные для входа в систему</p>
          </div>

          <!-- Общие ошибки -->
          <div v-if="general_error" class="alert alert-error alert-dismissible fade show mb-4" role="alert">
            {{ general_error }}
            <button type="button" class="btn-close" @click="general_error = null"></button>
          </div>

          <form @submit.prevent="login">
            <div class="form-group" :class="{ 'has-error': email_error }">
              <div class="position-relative">
                <div class="input-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <input type="email" class="form-control ps-5" placeholder="Email" v-model="email" />
              </div>
              <div v-if="email_error" class="error-message mt-2">
                <small>{{ email_error }}</small>
              </div>
            </div>

            <div class="form-group" :class="{ 'has-error': password_error }">
              <div class="position-relative">
                <div class="input-icon">
                  <i class="fas fa-lock"></i>
                </div>
                <input :type="showPassword ? 'text' : 'password'" class="form-control ps-5" placeholder="Пароль"
                  v-model="password" />
                <span class="password-toggle" @click="showPassword = !showPassword">
                  <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </span>
              </div>
              <div v-if="password_error" class="error-message mt-2">
                <small>{{ password_error }}</small>
              </div>
            </div>

            <button type="submit" class="btn btn-login w-100 py-2 mb-3" :disabled="loading" @click.prevent="login">
              <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              {{ loading ? "Вход..." : "Войти" }}
            </button>

            <div class="register-link text-center">
              Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      email_error: null,
      password_error: null,
    };
  },
  methods: {
    async login() {

      fetch('http://web3-14-08-25.local/imageForProduct/M-Ggon-312c10f6e2f6cfee7afd836555965079.jpeg')
        .then(response => {
          console.log('Status:', response.status);
          console.log('Headers:', response.headers);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      this.password_error = null;
      this.email_error = null;
      // const raw = JSON.stringify({
      //     "email": this.email,
      //     "password": this.password
      // });

      // const response = await fetch("http://web3-14-08-25.local/api/login ", {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json",
      //     },
      //     body: raw,
      // });
      // if (response.ok)
      // console.log(response.json());

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: this.email,
        password: this.password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      let result = await fetch(`${this.$config.apiUrl}api/login`, requestOptions);
      // .then((response) => response.text())
      // .then((result) => console.log(result))
      // .catch((error) => console.error(error));
      result = await result.json();

      if ("data" in result) {
        if (result.data.code == 200) {
          localStorage.setItem("token", result.data.token);
          this.$config.activeToken = result.data.token;
          this.$router.push("/products");
        }
      } else {
        if ("error" in result) {
          // if ("password" in result.error.error) {
          //   this.password_error = result.error.error["password"][0];
          // }
          // if ("email" in result.error.error) {
          //   this.email_error = result.error.error["email"][0];
          // }
          Object.keys(result.error.error).forEach((key_word) =>
            this[`${key_word}_error`] = result.error.error[key_word][0]
          )
        } else {
          this.password_error = "Ошибка в логине или пароле";
        }
      }
    },
  },
  beforeCreate() {
    this.$config.activeToken = localStorage.getItem("token");
  },
};
</script>

<style>
body {
  background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-container {
  max-width: 500px;
  width: 100%;
}

.login-card {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.header-divider {
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, #43cea2, #185a9d);
  border-radius: 2px;
  margin: 15px auto;
}

.form-control:focus {
  border-color: #43cea2;
  box-shadow: 0 0 0 0.25rem rgba(67, 206, 162, 0.25);
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #43cea2;
  z-index: 5;
}

.btn-login {
  background: linear-gradient(to right, #43cea2, #185a9d);
  border: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s;
  padding: 12px;
}

.btn-login:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to right, #36b592, #134b80);
}

.register-link a {
  color: #43cea2;
  font-weight: 600;
  text-decoration: none;
}

.register-link a:hover {
  color: #185a9d;
  text-decoration: underline;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 5px;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #6c757d;
  z-index: 5;
}

.alert-error {
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-group.has-error .form-control {
  border-color: #dc3545;
}
</style>
