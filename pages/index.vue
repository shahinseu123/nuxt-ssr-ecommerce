<template>
    <div class="home-wrapper"> 
       <div class="my-3">
           <CategoryList />
       </div> 
       <!-- <div class="my-3">
           <BrandList />
       </div>  -->
       <div class="my-3">
           <ProductsList />
       </div>
       <div class="my-3">
           <ProductGrid header="Only For You" :products="products" />
       </div>
    </div>
</template>

<script lang="ts" setup>
import BrandList from "~/components/brands/BrandList.vue";
import CategoryList from "@/components/category/CategoryList.vue"
import ProductGrid from "~/components/products/ProductGrid.vue";
import ProductsList from '~/components/products/ProductsList.vue';
import type { Products, NullInterface } from '~/interface/product';    
import { useProductStore } from '~/store/product';
const product = useProductStore()

const products = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19])
const { data: posts } : { data: Products[]|NullInterface } = await useFetch<Products[]|NullInterface>('https://jsonplaceholder.typicode.com/posts') 

onMounted(() => {
    product.act_products(posts) 
})
</script>