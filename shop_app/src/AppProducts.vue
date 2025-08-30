<template>
  <div id="app">
    <div class="products-wrapper">
      <div class="container">
        <!-- Заголовок и фильтры -->
        <div class="products-header">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h1 class="fw-bold">Наши товары</h1>
              <p class="text-muted">Найдите то, что вам нужно</p>
            </div>
            <div class="col-md-6">
              <div class="input-group mb-3">
                <input type="text" class="form-control search-box" placeholder="Поиск товаров..." v-model="searchQuery">
                <span class="input-group-text">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>
          </div>

          <!-- <div class="row mt-3">
            <div class="col-12">
              <div class="filter-buttons text-center">
                <button class="btn btn-outline-primary" :class="{ 'active': filterCategory === 'all' }"
                  @click="filterCategory = 'all'">
                  Все товары
                </button>
                <button class="btn btn-outline-success" :class="{ 'active': filterCategory === 'fructs' }"
                  @click="filterCategory = 'fructs'">
                  Фрукты
                </button>
                <button class="btn btn-outline-warning" :class="{ 'active': filterCategory === 'vegetables' }"
                  @click="filterCategory = 'vegetables'">
                  Овощи
                </button>
                <button class="btn btn-outline-info" :class="{ 'active': filterCategory === 'drinks' }"
                  @click="filterCategory = 'drinks'">
                  Напитки
                </button>
              </div>
            </div>
          </div> -->
        </div>

        <!-- Список товаров -->
        <!-- // v-if="filteredProducts.length" -->
        <div class="row" > 
          <div class="col-lg-4 col-md-6 mb-4" v-for="product in filteredProducts.products" :key="product.id">

            <div class="product-card card h-100">
              <img :src='product.file_url[0]' :alt="product.name"
                class="product-image">

              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="product-category"> {{ product.category }} </span>
                  <span class="product-quantity" :class="getQuantityClass(product.quantity)">
                    {{ product.quantity }} в наличии
                  </span>
                </div>

                <h5 class="card-title">{{ product.name }}</h5>

                <div class="d-flex justify-content-between align-items-center mt-3">
                  <span class="product-price">{{ product.price }} ₽</span>
                  <button class="btn btn-add-to-cart">
                    <i class="fas fa-shopping-cart me-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        <app-pagination :count="product.totalCount" ></app-pagination>
        </div>
        <!-- Состояние при отсутствии товаров -->
        <!-- <div class="empty-state" v-else>
          <i class="fas fa-search fa-3x text-muted mb-3"></i>
          <h4>Товары не найдены</h4>
          <p class="text-muted">Попробуйте изменить параметры поиска или фильтры</p> -->
          <!-- <button class="btn btn-primary" @click="clearFilters">
            Сбросить фильтры
          </button> -->
        <!-- </div> -->
      </div>
    </div>
  </div>

</template>

<script>
import AppPagination from './AppPagination.vue';


export default {
  data() {
    return {
      filteredProducts: null,
      totalCount: null,
    }
  },
  methods: {
    getQuantityClass(quantity) {
      if (quantity > 100) return 'quantity-high';
      if (quantity > 10) return 'quantity-medium';
      return 'quantity-low';
    },
    async loadProducts() {

      const raw = JSON.stringify({
          "page": 1,
          "count": 3
      });

      const response = await fetch(`${this.$config.apiUrl}api/products`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: raw,
      });
      if (response.ok) {
        this.filteredProducts = await response.json();
        this.filteredProducts = this.filteredProducts.data;
        this.totalCount = this.filteredProducts.data.totalCount;
        this.filteredProducts = this.filteredProducts.products;
        console.log(this.filteredProducts);
        console.log(this.totalCount);
      }
      
    }
  },
  beforeCreate() {
    this.$config.activeToken = localStorage.getItem('token');
  },
  created() {
    this.loadProducts()
  },
  components: {
    AppPagination
  }
}
</script>

<style>
:root {
  --primary-color: #43cea2;
  --secondary-color: #185a9d;
  --text-color: #333;
  --light-bg: #f8f9fa;
}

.products-wrapper {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  min-height: 100vh;
  padding: 85px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.products-header {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.product-image {
  height: 200px;
  object-fit: cover;
  width: 100%;
}

.product-category {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.product-price {
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 1.4rem;
}

.product-quantity {
  font-size: 0.9rem;
}

.quantity-high {
  color: #28a745;
}

.quantity-medium {
  color: #ffc107;
}

.quantity-low {
  color: #dc3545;
}

.btn-add-to-cart {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-add-to-cart:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.search-box {
  border-radius: 25px;
  border: 2px solid var(--primary-color);
  padding: 10px 20px;
}

.filter-buttons .btn {
  border-radius: 20px;
  margin: 0 5px;
}

.empty-state {
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 15px;
}
</style>