<template>
  <div class="order-card mt-4">
    <div class="order-header">
      <div class="order-info">
        <h5 class="order-number">Заказ #{{ object.track_code }}</h5>
        <p class="order-date">{{ object.data_of_creation }}</p>
      </div>
      <div class="order-status status-pending">
        <i class="fas fa-clock me-1"></i>В обработке
      </div>
    </div>

    <div class="order-items">
      <div class="order-item">
        <div class="item-image">
          <i class="fas fa-box"></i>
        </div>
        <div class="item-info">
          <h6 class="item-name">Чехол защитный</h6>
          <p class="item-details">Артикул: CHZ-S23-BLK</p>
        </div>
        <div class="item-quantity">x1</div>
        <div class="item-price">1 990 ₽</div>
      </div>
    </div>

    <div class="order-summary">
      <div class="summary-row">
        <span>Стоимость товаров:</span>
        <span>81 989 ₽</span>
      </div>
      <!-- <div class="summary-row">
        <span>Доставка:</span>
        <span>Бесплатно</span>
      </div> -->
      <div class="summary-row total">
        <span>Итого:</span>
        <span class="total-price">81 989 ₽</span>
      </div>
    </div>

    <div class="order-actions">
      <div class="status-selector">
        <label class="form-label">Изменить статус:</label>
        <select class="form-select">
          <option value="processing">Заказ в обработке</option>
          <option value="cancelled">Отменён</option>
          <option value="ready">Готов к получению</option>
        </select>
      </div>
      <button class="btn btn-primary"><i class="fas fa-save me-1"></i>Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["object"],
  methods: {
    handler() {
      console.log();
    },
  },
};
</script>
