<template>
<div class="row mt-5">
    <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
            <!-- Информация о странице -->
            <div class="text-muted">
                          
            </div>
            
            <!-- Кнопки пагинации -->
            <nav aria-label="Page navigation">
                <ul class="pagination mb-0">
                    <!-- Кнопка "Назад" -->
                    <li class="page-item disabled">
                        <button class="page-link" aria-label="Previous">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                    </li>
                    
                    <!-- Страница 1 -->
                    <li class="page-item active">
                        <button class="page-link">1</button>
                    </li>
                    
                    <!-- Страница 2 -->
                    <li class="page-item">
                        <button class="page-link">2</button>
                    </li>
                    
                    <!-- Страница 3 -->
                    <li class="page-item">
                        <button class="page-link">3</button>
                    </li>
                    
                    <!-- Многоточие -->
                    <li class="page-item disabled">
                        <span class="page-link">...</span>
                    </li>
                    
                    <!-- Страница 5 -->
                    <li class="page-item">
                        <button class="page-link">5</button>
                    </li>
                    
                    <!-- Кнопка "Вперед" -->
                    <li class="page-item">
                        <button class="page-link" aria-label="Next">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </li>
                </ul>
            </nav>
            
            <!-- Выбор количества товаров на странице -->
            <!-- <div class="d-flex align-items-center">
                <span class="me-2 text-muted">Показывать по:</span>
                <select class="form-select form-select-sm" style="width: 80px;">
                    <option value="6">6</option>
                    <option value="12" selected>12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                </select>
            </div> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'count'
    ]
}
</script>