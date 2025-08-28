<template>
    <div class="container">
        <div class="header">
            <h1>Добро пожаловать</h1>
            <p>Введите свои данные для входа в систему</p>
        </div>

        <form>
            <div class="form-group">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" v-model="email">
                <div v-if="email_error"><small> {{ email_error }} </small> </div>
            </div>

            <div class="form-group">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Пароль" v-model="password" >
                <div v-if="password_error"><small> {{password_error}} </small> </div>

            </div>

            <button type="submit" class="btn" @click.prevent="login">Войти</button>

            <div class="register-link">
                Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link>
            </div>
        </form>
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
        }
    },
    methods: {
        async login() {
            this.password_error = null;
            this.email_error = null;
            // console.log(this.password);
            // const raw = JSON.stringify({
            //     "email": this.email,
            //     "password": this.password
            // });

            // const response = await fetch("http://web3-14-08-25.local/api/login ", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "aplication/json",
            //     },
            //     body: raw,
            // });
            // if (response.ok)
            // console.log(response.json());

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "email": this.email,
                "password": this.password
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            let result = await fetch("http://web3-14-08-25.local/api/login", requestOptions)
            // .then((response) => response.text())
            // .then((result) => console.log(result))
            // .catch((error) => console.error(error));
            result = await result.json();

            if ('data' in result) {
                if (result.data.code == 200) {
                    localStorage.setItem('token', result.data.token);
                    this.$router.push('/register');
                }
            } else {
                if ('error' in result) {
                    if ("password" in result.error.error) {
                        this.password_error = result.error.error['password'][0];
                    }
                    if ("email" in result.error.error) {
                        this.email_error = result.error.error['email'][0  ]
                    }
                    // Object.keys(result.error.error).forEach(function (key_word) {
                    //     console.log(123)
                    //     // console.log(this[key_word + "_error"]);
                    //     // this.key_word = result.error.error[key_word][0]
                    // })
                } else {
                    this.password_error = 'Ошибка в логине или пароле'
                }
            }
        }
    }
}
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
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.header-divider {
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, #43cea2, #185a9d);
    border-radius: 2px;
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
</style>