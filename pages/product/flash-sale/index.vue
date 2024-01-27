<template>
    <div class="fash-sale">
        <!-- banner section  -->
        <div class="banner">
            <BannerFW />
        </div>
        <!-- banner section end -->
        <div :class="scrollPosition >= 322 ? 'fixed top-0 left-0 z-10 w-full':''">
            <!-- countdown section  -->
            <div class="count-down mb-2">
               <CountDownHeader />
            </div>
            <!-- countdown section end -->
            <!-- category tabs  -->
            <div class="category-tabs shadow">
                <CategoryTab />
            </div>
            <!-- category tabs end -->
        </div>
        <!-- products section  -->
        <div class="product-section mt-2">
            <div class="product-body">
                 <ProductGrid header="On Sale Now" :products="products" />
            </div>
        </div>
    </div>
</template>
<script setup>
import ProductGrid from "@/components/products/ProductGrid.vue"
import BannerFW from "@/components/others/BannerFW.vue"
import CountDownHeader from "@/components/others/CountDownHeader.vue"
import CategoryTab from "@/components/category/CategoryTab.vue"
import { onMounted } from "vue";

const products = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14])
const scrollPosition = ref(0) 

function handleScroll() {
    scrollPosition.value = window.scrollY;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
})
</script>