<template>
    <div class="container mb-5">
        <!-- Заголовок страницы -->
        <div class="text-center mb-4">
            <h1 class="page-title"><i class="fas fa-shopping-cart me-2"></i>Моя корзина</h1>
        </div>

        <div class="row" v-if="this.$config.activeToken">
            <!-- Левая колонка - Данные пользователя -->
            <div class="col-lg-4 mb-4">
                <div class="user-section p-4">
                    <div class="text-center mb-4">
                        <img src="https://via.placeholder.com/100" class="rounded-circle img-thumbnail mb-3"
                            alt="Аватар">
                        <h4>Иван Петров</h4>
                        <p class="mb-0">VIP клиент</p>
                    </div>

                    <div class="user-info">
                        <div class="d-flex justify-content-between mb-2">
                            <span>Email:</span>
                            <strong>ivan.petrov@example.com</strong>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Телефон:</span>
                            <strong>+7 (999) 123-45-67</strong>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Баланс:</span>
                            <strong>5 430 ₽</strong>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Скидка:</span>
                            <strong class="text-success">10%</strong>
                        </div>
                        <hr class="my-3 bg-light">
                        <div class="d-flex justify-content-between mb-2">
                            <span>Заказов:</span>
                            <strong>14</strong>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>На сумму:</span>
                            <strong>67 890 ₽</strong>
                        </div>
                    </div>

                    <div class="mt-4">
                        <a href="#" class="btn btn-light w-100 mb-2">
                            <i class="fas fa-edit me-2"></i>Редактировать профиль
                        </a>
                        <a href="#" class="btn btn-outline-light w-100">
                            <i class="fas fa-history me-2"></i>История заказов
                        </a>
                    </div>
                </div>

                <!-- Блок адреса доставки -->
                <div class="card mt-4">
                    <div class="card-header bg-white">
                        <h6 class="mb-0"><i class="fas fa-truck me-2"></i>Адрес доставки</h6>
                    </div>
                    <div class="card-body">
                        <p class="card-text">г. Москва, ул. Примерная, д. 123, кв. 45</p>
                        <button class="btn btn-outline-primary btn-sm w-100">
                            <i class="fas fa-map-marker-alt me-2"></i>Изменить адрес
                        </button>
                    </div>
                </div>
            </div>

            <!-- Правая колонка - Корзина -->
            <div class="col-lg-8">
                <div class="cart-container p-4">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="mb-0">Товары в корзине</h3>
                        <span class="badge bg-primary">3 товара</span>
                    </div>

                    <!-- Элементы корзины -->
                    <div class="cart-items">
                        <!-- Товар 1 -->
                        <div class="cart-item d-flex">
                            <img src="https://via.placeholder.com/300" class="product-image me-3" alt="Товар">
                            <div class="flex-grow-1">
                                <h5 class="mb-1">Смартфон Samsung Galaxy S23</h5>
                                <p class="text-muted mb-2">Черный, 256 ГБ</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <button class="btn btn-sm quantity-btn btn-outline-secondary">-</button>
                                        <span class="mx-3 fw-bold">1</span>
                                        <button class="btn btn-sm quantity-btn btn-outline-primary">+</button>
                                    </div>
                                    <div>
                                        <span class="fw-bold fs-5">64 990 ₽</span>
                                        <small class="text-danger text-decoration-line-through d-block">69 990 ₽</small>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-link text-danger ms-3">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>

                        <!-- Товар 2 -->
                        <div class="cart-item d-flex">
                            <img src="https://via.placeholder.com/300" class="product-image me-3" alt="Товар">
                            <div class="flex-grow-1">
                                <h5 class="mb-1">Наушники Sony WH-1000XM4</h5>
                                <p class="text-muted mb-2">Белые, беспроводные</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <button class="btn btn-sm quantity-btn btn-outline-secondary">-</button>
                                        <span class="mx-3 fw-bold">2</span>
                                        <button class="btn btn-sm quantity-btn btn-outline-primary">+</button>
                                    </div>
                                    <div>
                                        <span class="fw-bold fs-5">29 990 ₽</span>
                                        <small class="text-success d-block">14 995 ₽ за шт.</small>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-link text-danger ms-3">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>

                        <!-- Товар 3 -->
                        <div class="cart-item d-flex">
                            <img src="https://via.placeholder.com/300" class="product-image me-3" alt="Товар">
                            <div class="flex-grow-1">
                                <h5 class="mb-1">Чехол для смартфона</h5>
                                <p class="text-muted mb-2">Прозрачный, защитный</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <button class="btn btn-sm quantity-btn btn-outline-secondary">-</button>
                                        <span class="mx-3 fw-bold">1</span>
                                        <button class="btn btn-sm quantity-btn btn-outline-primary">+</button>
                                    </div>
                                    <div>
                                        <span class="fw-bold fs-5">1 490 ₽</span>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-link text-danger ms-3">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Итоги корзины -->
                    <div class="summary-card p-4 mt-4">
                        <h5 class="text-white mb-4">Итог заказа</h5>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Товары (3):</span>
                            <strong>96 470 ₽</strong>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Скидка:</span>
                            <strong class="text-warning">-5 000 ₽</strong>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Доставка:</span>
                            <strong class="text-success">Бесплатно</strong>
                        </div>
                        <hr class="bg-light">
                        <div class="d-flex justify-content-between mb-3">
                            <span class="fs-5">Итого:</span>
                            <strong class="fs-4">91 470 ₽</strong>
                        </div>
                        <button class="btn btn-checkout w-100">
                            <i class="fas fa-lock me-2"></i>Перейти к оформлению
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="unauth-container" v-else>
            <div class="unauth-header">
                <div class="icon-wrapper">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3>Требуется авторизация</h3>
                <p>Чтобы получить доступ к корзине, пожалуйста, войдите в систему</p>
            </div>

            <div class="unauth-body">
                <div class="text-center mb-4">
                    <h4>Вы не авторизованы</h4>
                    <p class="text-muted">Авторизуйтесь, чтобы получить доступ ко всем возможностям</p>
                </div>

                <div class="benefits-list">
                    <h5 class="mb-3">Преимущества авторизации:</h5>
                    <div class="benefit-item">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Сохранение товаров в корзине</span>
                    </div>
                    <div class="benefit-item">
                        <i class="fas fa-truck"></i>
                        <span>Быстрое оформление заказов</span>
                    </div>
                    <div class="benefit-item">
                        <i class="fas fa-percent"></i>
                        <span>Персональные скидки и акции</span>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-flex justify-content-center mb-3">
                        <button class="btn btn-login" @click="goToLogin">
                            <router-link class="fas fa-sign-in-alt me-2" to="/login">Войти</router-link>
                        </button>
                           
                        <button class="btn btn-login" @click="goToRegister">
                            <router-link class="fas fa-sign-in-alt me-2" to="/register">Регистрация</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.fa-sign-in-alt {
    color: white;
}

body {
    background-color: #f8f9fa;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
}

.user-section {
    background: linear-gradient(135deg, #d1d1d1 0%, #224abe 100%);
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cart-container {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cart-item {
    border-bottom: 1px solid #e3e6f0;
    padding: 1.5rem 0;
    transition: background-color 0.3s;
}

.cart-item:hover {
    background-color: #f8f9fc;
}

.product-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
}

.quantity-btn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.summary-card {
    background: linear-gradient(135deg, #36b9cc 0%, #1cc88a 100%);
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-checkout {
    background: linear-gradient(135deg, #4e73df 0%, #224abe 100%);
    border: none;
    padding: 12px 30px;
    font-weight: 600;
    transition: all 0.3s;
}

.btn-checkout:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(78, 115, 223, 0.4);
}

.page-title {
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 2rem;
}

.unauth-container {
    max-width: 600px;
    margin: 2rem auto;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.unauth-header {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    color: white;
    padding: 2rem;
    text-align: center;
}

.unauth-body {
    padding: 2rem;
}

.icon-wrapper {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2.5rem;
}

.btn-auth {
    padding: 12px 30px;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.3s;
    margin: 0 10px;
}

.btn-login {
    background: linear-gradient(135deg, #4e73df 0%, #224abe 100%);
    border: none;
    color: white;
}

.btn-register {
    background: white;
    border: 2px solid #4e73df;
    color: #ffffff;
}

.btn-login:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(78, 115, 223, 0.4);
}

.btn-register:hover {
    background: #f8f9ff;
    transform: translateY(-2px);
}

.benefits-list {
    background: #f8f9fc;
    border-radius: 10px;
    padding: 1.5rem;
    margin: 2rem 0;
}

.benefit-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.benefit-item i {
    color: #4e73df;
    font-size: 1.2rem;
    margin-right: 1rem;
    width: 24px;
}
</style>