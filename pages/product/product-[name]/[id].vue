<template>
    <div class="main-container">
        <div class="bradcrumbs"></div>
        <div class="single-products-sections mt-2">
            <div class="lg:flex xl:flex">
                <div class="lg:w-2/6 xl:w-2/6">
                   <div class="product-img-carousel bg-white p-2">
                     <ProductSlide />
                   </div>
                </div>
                <div class="lg:w-4/6 xl:w-4/6">

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import ProductSlide from '~/components/products/ProductSlide.vue';
</script>